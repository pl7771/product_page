import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import {
  deleteArticle,
  getArticle,
  readArticles,
  upsertArticle,
} from './db.js';
import { createSession, destroySession, requireAdmin, verifyPassword } from './auth.js';
import { seedArticlesIfMissing } from './seedArticles.js';

const PORT = Number(process.env.PORT) || 3001;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

seedArticlesIfMissing(readArticles, upsertArticle);

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '10mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/admin/login', (req, res) => {
  if (!ADMIN_PASSWORD) {
    return res.status(503).json({ error: 'not_configured' });
  }

  const { password } = req.body ?? {};
  if (!verifyPassword(password, ADMIN_PASSWORD)) {
    return res.status(401).json({ error: 'invalid' });
  }

  res.json(createSession());
});

app.post('/api/admin/logout', requireAdmin, (req, res) => {
  const token = req.headers.authorization?.slice(7);
  if (token) destroySession(token);
  res.status(204).end();
});

app.get('/api/admin/me', requireAdmin, (_req, res) => {
  res.json({ ok: true });
});

app.get('/api/articles/public', (_req, res) => {
  const articles = readArticles().filter(
    (a) => a.status === 'published' && a.visible !== false,
  );
  res.json(articles);
});

app.get('/api/articles', requireAdmin, (_req, res) => {
  res.json(readArticles());
});

app.get('/api/articles/:id', (req, res) => {
  const article = getArticle(req.params.id);
  if (!article) return res.status(404).json({ error: 'not_found' });
  res.json(article);
});

app.post('/api/articles', requireAdmin, (req, res) => {
  const body = req.body ?? {};
  const now = new Date().toISOString();
  const article = {
    ...body,
    id: body.id || `custom-${Date.now()}`,
    createdAt: body.createdAt || now,
    updatedAt: now,
  };

  res.status(201).json(upsertArticle(article));
});

app.put('/api/articles/:id', requireAdmin, (req, res) => {
  const existing = getArticle(req.params.id);
  if (!existing) return res.status(404).json({ error: 'not_found' });

  const article = {
    ...existing,
    ...req.body,
    id: existing.id,
    createdAt: existing.createdAt,
    updatedAt: new Date().toISOString(),
  };

  res.json(upsertArticle(article));
});

app.patch('/api/articles/:id/visibility', requireAdmin, (req, res) => {
  const existing = getArticle(req.params.id);
  if (!existing) return res.status(404).json({ error: 'not_found' });

  const article = {
    ...existing,
    visible: Boolean(req.body?.visible),
    updatedAt: new Date().toISOString(),
  };

  res.json(upsertArticle(article));
});

app.post('/api/articles/:id/archive', requireAdmin, (req, res) => {
  const existing = getArticle(req.params.id);
  if (!existing) return res.status(404).json({ error: 'not_found' });
  if (existing.status === 'archived') return res.json(existing);

  const article = {
    ...existing,
    preArchiveStatus: existing.status,
    status: 'archived',
    updatedAt: new Date().toISOString(),
  };

  res.json(upsertArticle(article));
});

app.post('/api/articles/:id/restore', requireAdmin, (req, res) => {
  const existing = getArticle(req.params.id);
  if (!existing) return res.status(404).json({ error: 'not_found' });
  if (existing.status !== 'archived') return res.json(existing);

  const { preArchiveStatus, ...rest } = existing;
  const article = {
    ...rest,
    status: preArchiveStatus === 'published' ? 'published' : 'draft',
    updatedAt: new Date().toISOString(),
  };

  res.json(upsertArticle(article));
});

app.post('/api/articles/:id/unpublish', requireAdmin, (req, res) => {
  const existing = getArticle(req.params.id);
  if (!existing) return res.status(404).json({ error: 'not_found' });
  if (existing.status !== 'published') return res.json(existing);

  const article = {
    ...existing,
    status: 'draft',
    updatedAt: new Date().toISOString(),
  };

  res.json(upsertArticle(article));
});

app.delete('/api/articles/:id', requireAdmin, (req, res) => {
  const existing = getArticle(req.params.id);
  if (!existing) return res.status(404).json({ error: 'not_found' });
  if (existing.status !== 'archived') {
    return res.status(400).json({ error: 'not_archived' });
  }

  deleteArticle(req.params.id);
  res.status(204).end();
});

app.listen(PORT, () => {
  if (!ADMIN_PASSWORD) {
    console.warn('Warning: ADMIN_PASSWORD is not set. Admin login is disabled.');
  }
  console.log(`API server running at http://localhost:${PORT}`);
});
