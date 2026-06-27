import crypto from 'crypto';

const SESSION_HOURS = 8;
const sessions = new Map();

export const createSession = () => {
  const token = crypto.randomUUID();
  const expiresAt = Date.now() + SESSION_HOURS * 60 * 60 * 1000;
  sessions.set(token, { expiresAt });
  return { token, expiresAt };
};

export const destroySession = (token) => {
  sessions.delete(token);
};

const isValidToken = (token) => {
  const session = sessions.get(token);
  if (!session) return false;
  if (Date.now() > session.expiresAt) {
    sessions.delete(token);
    return false;
  }
  return true;
};

export const requireAdmin = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  const token = header.slice(7);
  if (!isValidToken(token)) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  next();
};

export const verifyPassword = (password, expected) => Boolean(expected) && password === expected;
