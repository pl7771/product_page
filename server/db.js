import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, 'data');
const DB_PATH = path.join(DATA_DIR, 'articles.json');

const ensureDb = () => {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(DB_PATH)) fs.writeFileSync(DB_PATH, '[]', 'utf8');
};

export const readArticles = () => {
  ensureDb();
  const raw = fs.readFileSync(DB_PATH, 'utf8');
  const parsed = JSON.parse(raw);
  return Array.isArray(parsed) ? parsed : [];
};

export const writeArticles = (articles) => {
  ensureDb();
  fs.writeFileSync(DB_PATH, JSON.stringify(articles, null, 2), 'utf8');
};

export const getArticle = (id) => readArticles().find((a) => a.id === id) ?? null;

export const upsertArticle = (article) => {
  const articles = readArticles();
  const index = articles.findIndex((a) => a.id === article.id);
  const next = { ...article, updatedAt: new Date().toISOString() };

  if (index >= 0) articles[index] = next;
  else articles.unshift(next);

  writeArticles(articles);
  return next;
};

export const deleteArticle = (id) => {
  const articles = readArticles().filter((a) => a.id !== id);
  writeArticles(articles);
};
