import { track } from "./trackApi.js";

const SEEN_KEY = "das_seen_sections";

function getSeenSet() {
  const raw = sessionStorage.getItem(SEEN_KEY);
  return new Set(raw ? JSON.parse(raw) : []);
}

function saveSeenSet(set) {
  sessionStorage.setItem(SEEN_KEY, JSON.stringify([...set]));
}

export function observeSectionOnce(el, section, meta = {}) {
  if (!el) return () => {};

  const seen = getSeenSet();
  if (seen.has(section)) return () => {};

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const freshSeen = getSeenSet();
          if (!freshSeen.has(section)) {
            freshSeen.add(section);
            saveSeenSet(freshSeen);
            track("section_view", { section, ...meta });
          }
          io.disconnect();
          break;
        }
      }
    },
    { threshold: 0.35 },
  );
  io.observe(el);
  return () => io.disconnect();
}
