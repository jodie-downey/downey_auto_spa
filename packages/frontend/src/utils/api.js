import { API_BASE } from "./constants.js";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

const submitQuoteRequest = async (quoteData) => {
  const res = await fetch(`${API_BASE}/api/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(quoteData),
  });

  return checkResponse(res);
};

export { checkResponse, submitQuoteRequest };
