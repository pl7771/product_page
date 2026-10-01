import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import {
  deleteArticle,
  getArticle,
  readArticles,
  upsertArticle,
} from './db.js';
import {
  createSession,
  destroySession,
  isAdminRequest,
  requireAdmin,
  verifyPassword,
} from './auth.js';
import { seedArticlesIfMissing } from './seedArticles.js';
import {
  extractInlineImages,
  saveImage,
  UPLOAD_MIME_TYPES,
  UPLOADS_DIR,
  UPLOADS_URL_PREFIX,
} from './uploads.js';

const PORT = Number(process.env.PORT) || 3001;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

seedArticlesIfMissing(readArticles, upsertArticle);

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '10mb' }));

// Production nginx serves these itself; this covers local dev (proxied by Vite).
app.use(
  UPLOADS_URL_PREFIX,
  express.static(UPLOADS_DIR, { immutable: true, maxAge: '365d', fallthrough: false }),
);

const isPublic = (article) => article.status === 'published' && article.visible !== false;

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
  res.json(readArticles().filter(isPublic));
});

app.get('/api/articles', requireAdmin, (_req, res) => {
  res.json(readArticles());
});

app.get('/api/articles/:id', (req, res) => {
  const article = getArticle(req.params.id);
  // Drafts and archived articles are admin-only; answer 404 rather than 401 so
  // their IDs cannot be probed.
  if (!article || (!isPublic(article) && !isAdminRequest(req))) {
    return res.status(404).json({ error: 'not_found' });
  }
  res.json(article);
});

app.post(
  '/api/uploads',
  requireAdmin,
  express.raw({ type: UPLOAD_MIME_TYPES, limit: '8mb' }),
  (req, res) => {
    const url = Buffer.isBuffer(req.body) ? saveImage(req.body) : null;
    if (!url) return res.status(400).json({ error: 'invalid_image' });
    res.status(201).json({ url });
  },
);

app.post('/api/articles', requireAdmin, (req, res) => {
  const body = req.body ?? {};
  const now = new Date().toISOString();
  const article = {
    ...body,
    id: body.id || `custom-${Date.now()}`,
    createdAt: body.createdAt || now,
    updatedAt: now,
  };

  res.status(201).json(upsertArticle(extractInlineImages(article).article));
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

  res.json(upsertArticle(extractInlineImages(article).article));
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
