import axios from "axios";

export const getReviews = async (_req, res) => {
  try {
    const placeId = process.env.GOOGLE_PLACE_ID;
    const apiKey = process.env.GOOGLE_API_KEY;

    const url = `https://places.googleapis.com/v1/places/${placeId}`;

    const response = await axios.get(url, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "displayName,rating,userRatingCount,reviews",
      },
    });

    const place = response.data;

    if (!place) {
      return res.status(500).json({ message: "Failed to load reviews" });
    }

    const reviews = (place.reviews || []).map((review) => ({
      author_name: review.authorAttribution?.displayName || "Anonymous",
      author_url: review.authorAttribution?.uri || null,
      rating: review.rating,
      text: review.text?.text || "",
      time: review.publishTime,
    }));

    res.json({
      name: place.displayName?.text,
      rating: place.rating,
      totalReviews: place.userRatingCount,
      reviews,
    });
  } catch (error) {
    console.error("Google Reviews Error:", error);
    res.status(500).json({ message: "Server error fetching reviews" });
  }
};
