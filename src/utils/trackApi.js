import { API_BASE } from "./constants.js";

const SESSION_KEY = "das_session_id";

function getSessionId() {
  let id = localStorage.getItem(SESSION_KEY);

  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

export function track(type, meta = {}) {
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
