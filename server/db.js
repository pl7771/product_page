import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { DatabaseSync } from 'node:sqlite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, 'data');
const DB_PATH = path.join(DATA_DIR, 'articles.db');
const LEGACY_JSON_PATH = path.join(DATA_DIR, 'articles.json');

const ensureDataDir = () => {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
};

const parseArticle = (row) => JSON.parse(row.data);

const sortArticles = (articles) =>
  articles.sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  );

const withTransaction = (db, fn) => {
  db.exec('BEGIN');
  try {
    fn();
    db.exec('COMMIT');
  } catch (error) {
    db.exec('ROLLBACK');
    throw error;
  }
};

const migrateFromJson = (db) => {
  const { count } = db.prepare('SELECT COUNT(*) AS count FROM articles').get();
  if (count > 0 || !fs.existsSync(LEGACY_JSON_PATH)) return;

  const raw = fs.readFileSync(LEGACY_JSON_PATH, 'utf8');
  const articles = JSON.parse(raw);
  if (!Array.isArray(articles) || articles.length === 0) return;

  const insert = db.prepare('INSERT OR REPLACE INTO articles (id, data) VALUES (?, ?)');
  withTransaction(db, () => {
    for (const article of articles) {
      insert.run(String(article.id), JSON.stringify(article));
    }
  });

  console.log(`Migrated ${articles.length} article(s) from articles.json → articles.db`);
};

const db = (() => {
  ensureDataDir();
  const connection = new DatabaseSync(DB_PATH);
  connection.exec('PRAGMA journal_mode = WAL');
  connection.exec(`
    CREATE TABLE IF NOT EXISTS articles (
      id TEXT PRIMARY KEY,
      data TEXT NOT NULL
    )
  `);
  migrateFromJson(connection);
  return connection;
})();

export const readArticles = () => {
  const rows = db.prepare('SELECT data FROM articles').all();
  return sortArticles(rows.map(parseArticle));
};

export const getArticle = (id) => {
  const row = db.prepare('SELECT data FROM articles WHERE id = ?').get(String(id));
  return row ? parseArticle(row) : null;
};

export const upsertArticle = (article) => {
  const next = { ...article, updatedAt: new Date().toISOString() };
  db.prepare('INSERT OR REPLACE INTO articles (id, data) VALUES (?, ?)').run(
    String(next.id),
    JSON.stringify(next),
  );
  return next;
};

export const deleteArticle = (id) => {
  db.prepare('DELETE FROM articles WHERE id = ?').run(String(id));
};
