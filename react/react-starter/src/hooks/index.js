import { useState, useEffect, useCallback, useRef } from 'react';

/* ── useMediaQuery ─────────────────────────────────────────
   Returns true when the CSS media query matches.
   Usage: const isMobile = useMediaQuery('(max-width: 768px)');
*/
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
};

/* ── useScrollPosition ──────────────────────────────────────
   Returns { x, y } scroll position.
*/
export const useScrollPosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = () => setPosition({ x: window.scrollX, y: window.scrollY });
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return position;
};

/* ── useDebounce ────────────────────────────────────────────
   Delays updating value until after `delay` ms of inactivity.
*/
export const useDebounce = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};

/* ── useLocalStorage ─────────────────────────────────────────
   Persisted useState backed by localStorage.
*/
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    try {
      const val = value instanceof Function ? value(storedValue) : value;
      setStoredValue(val);
      window.localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.error(e);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
};

/* ── useClickOutside ──────────────────────────────────────────
   Calls handler when clicking outside the ref element.
   Usage: const ref = useClickOutside(() => setOpen(false));
*/
export const useClickOutside = (handler) => {
  const ref = useRef(null);

  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler(e);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler]);

  return ref;
};

/* ── useToggle ────────────────────────────────────────────────
   Simple boolean toggle.
*/
export const useToggle = (initial = false) => {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue((v) => !v), []);
  return [value, toggle, setValue];
};
