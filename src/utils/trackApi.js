const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

const SESSION_KEY = "das_session_id";

console.log("API_BASE (dev):", API_BASE);

function getSessionId() {
  let id = localStorage.getItem(SESSION_KEY);

  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

export function track(type, meta = {}) {
  console.log("TRACK:", type, meta, `${API_BASE}/api/events`);
  try {
    const payload = {
      type,
      ts: new Date().toISOString(),
      path: window.location.pathname,
      sessionId: getSessionId(),
      meta,
    };

    fetch(`${API_BASE}/api/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {});
  } catch {}
}
