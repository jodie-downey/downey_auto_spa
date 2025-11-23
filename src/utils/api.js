function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

const submitQuoteRequest = async (quoteData) => {
  try {
    const response = await fetch(
      "https://downey-auto-spa-server.onrender.com/api/submit",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(quoteData),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to submit quote");
    }

    return await response.json();
  } catch (error) {
    console.error("Error submitting quote:", error);
    throw error;
  }
};

export { checkResponse, submitQuoteRequest };
