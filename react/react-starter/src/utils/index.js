/* ── classNames ─────────────────────────────────────────────
   Joins class strings, filtering falsy values.
   Usage: cn('btn', isActive && 'btn--active', className)
*/
export const cn = (...classes) => classes.filter(Boolean).join(' ');

/* ── formatDate ─────────────────────────────────────────────
   Usage: formatDate('2024-01-15') → 'January 15, 2024'
*/
export const formatDate = (date, options = {}) => {
  const defaults = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat('en-US', { ...defaults, ...options }).format(new Date(date));
};

/* ── truncate ───────────────────────────────────────────────
   Truncates a string to maxLen characters.
*/
export const truncate = (str, maxLen = 100) =>
  str.length <= maxLen ? str : str.slice(0, maxLen).trimEnd() + '…';

/* ── slugify ────────────────────────────────────────────────
   Converts a string to a URL-safe slug.
*/
export const slugify = (str) =>
  str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

/* ── groupBy ────────────────────────────────────────────────
   Groups an array by a key function.
   Usage: groupBy(posts, p => p.category)
*/
export const groupBy = (arr, keyFn) =>
  arr.reduce((acc, item) => {
    const key = keyFn(item);
    (acc[key] = acc[key] || []).push(item);
    return acc;
  }, {});

/* ── range ──────────────────────────────────────────────────
   Creates a number array from start to end.
   Usage: range(1, 5) → [1, 2, 3, 4, 5]
*/
export const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

/* ── sleep ──────────────────────────────────────────────────
   Promise-based delay. Usage: await sleep(500)
*/
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/* ── noop ───────────────────────────────────────────────────
   No-operation placeholder function.
*/
export const noop = () => {};
