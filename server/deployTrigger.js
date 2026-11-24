/**
 * Debounced "rebuild the site" signal.
 *
 * When an article is published or changed in the admin panel it is live for
 * visitors immediately (the SPA fetches it from this API), but crawlers only get
 * a prerendered page + sitemap entry on the next build. This asks GitHub Actions
 * to run the Deploy workflow now (via a `repository_dispatch` event), so that
 * happens within minutes instead of waiting for the nightly cron.
 *
 * A burst of changes is coalesced into a single dispatch: each call restarts a
 * short timer, so publishing several articles in a row triggers one build once
 * things go quiet. The nightly cron stays as a backstop, and the workflow's
 * `concurrency: cancel-in-progress` collapses any overlap.
 *
 * Configuration (server/.env, never committed, never sent to the client):
 *   GITHUB_DISPATCH_TOKEN   fine-grained PAT, repo pl7771/product_page,
 *                           permission "Contents: Read and write". Required —
 *                           without it this module does nothing.
 *   GITHUB_DISPATCH_REPO    "owner/name", defaults to pl7771/product_page.
 *   DEPLOY_TRIGGER_DEBOUNCE_MS  quiet period before firing, default 90000.
 */
const TOKEN = process.env.GITHUB_DISPATCH_TOKEN;
const REPO = process.env.GITHUB_DISPATCH_REPO || 'pl7771/product_page';
const EVENT_TYPE = 'article-change';
const DEBOUNCE_MS = Number(process.env.DEPLOY_TRIGGER_DEBOUNCE_MS) || 90_000;

let timer = null;

const fire = async () => {
  timer = null;
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/dispatches`, {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
        'Content-Type': 'application/json',
        'User-Agent': 'hbshandao-api',
      },
      body: JSON.stringify({ event_type: EVENT_TYPE }),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      console.warn(`[deploy-trigger] dispatch failed: ${res.status} ${detail}`);
    } else {
      console.log('[deploy-trigger] rebuild requested');
    }
  } catch (err) {
    console.warn(`[deploy-trigger] dispatch error: ${err.message}`);
  }
};

/**
 * Request a rebuild. No-op when GITHUB_DISPATCH_TOKEN is unset (e.g. local dev),
 * so calling it from the API routes is always safe.
 */
export const requestDeploy = () => {
  if (!TOKEN) return;
  if (timer) clearTimeout(timer);
  timer = setTimeout(fire, DEBOUNCE_MS);
  // Don't keep the process alive just for a pending rebuild signal.
  if (typeof timer.unref === 'function') timer.unref();
};
