// One-off: move inline base64 cover images out of articles.db into data/uploads/.
//
//   node scripts/migrate-inline-images.mjs           # dry run, changes nothing
//   node scripts/migrate-inline-images.mjs --apply   # backs up the DB, then rewrites
//
// Writes rows directly instead of via upsertArticle() so updatedAt (sitemap
// lastmod, dates shown on the site) stays as it was.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { DatabaseSync } from 'node:sqlite';
import { extractInlineImages } from '../uploads.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = path.join(__dirname, '..', 'data', 'articles.db');
const apply = process.argv.includes('--apply');

const db = new DatabaseSync(DB_PATH);
const rows = db.prepare('SELECT id, data FROM articles').all();

const pending = rows
  .map((row) => ({ id: row.id, before: row.data, article: JSON.parse(row.data) }))
  .filter(({ article }) =>
    ['en', 'zh'].some((lang) => String(article[lang]?.image ?? '').startsWith('data:')),
  );

console.log(`${rows.length} article(s), ${pending.length} with inline images.`);

if (!apply) {
  for (const { id, before } of pending) console.log(`  would migrate ${id} (${before.length} bytes)`);
  console.log('Dry run. Re-run with --apply to migrate.');
  process.exit(0);
}

if (pending.length === 0) process.exit(0);

db.exec('PRAGMA wal_checkpoint(TRUNCATE)');
const backup = `${DB_PATH}.bak-${new Date().toISOString().replace(/[:.]/g, '-')}`;
fs.copyFileSync(DB_PATH, backup);
console.log(`Backup: ${backup}`);

const update = db.prepare('UPDATE articles SET data = ? WHERE id = ?');
db.exec('BEGIN');
try {
  for (const { id, before, article } of pending) {
    const { article: next, changed } = extractInlineImages(article);
    const after = JSON.stringify(next);
    update.run(after, id);
    console.log(`  ${id}: ${changed} image(s), ${before.length} -> ${after.length} bytes, ${next.en?.image}`);
  }
  db.exec('COMMIT');
} catch (error) {
  db.exec('ROLLBACK');
  throw error;
}

// Sanity check: nothing inline left.
const left = db
  .prepare('SELECT data FROM articles')
  .all()
  .filter((r) => r.data.includes('"data:image/')).length;
console.log(left === 0 ? 'Done: no inline images left.' : `WARNING: ${left} article(s) still inline.`);
