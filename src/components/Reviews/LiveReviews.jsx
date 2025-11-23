import "./LiveReviews.css";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

function LiveReviews() {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(null);
  const [totalReviews, setTotalReviews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://downey-auto-spa-server.onrender.com/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        setRating(data.rating);
        setTotalReviews(data.totalReviews);
        setReviews(data.reviews);
      })
      .catch((err) => console.error("Review fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="reviews">
        <h2 className="reviews__title">What Our Clients Are Saying</h2>
        <p className="reviews__summary">Loading reviews…</p>
      </section>
    );
  }

  return (
    <section className="reviews">
      <h2 className="reviews__title">What Our Clients Are Saying</h2>

      {rating && totalReviews && (
        <p className="reviews__summary">
          ⭐ {rating} out of 5 · {totalReviews} Google Reviews
        </p>
      )}

      <div className="reviews__grid">
        {(reviews || []).slice(0, 4).map((review, i) => (
          <div className="review-card" key={i}>
            <div className="review-card__stars">
              {Array.from({ length: review.rating }).map((_, idx) => (
                <Star key={idx} size={18} className="star-icon" />
              ))}
            </div>

            <p className="review-card__text">"{review.text}"</p>
            <p className="review-card__name">— {review.author_name}</p>

            <a
              className="review-card__link"
              href={review.author_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google →
            </a>
          </div>
        ))}
      </div>
      <div className="reviews__cta">
        <a
          href="https://search.google.com/local/writereview?placeid=ChIJ2WhtOE-5ZYgRJDJLH_jFRfI"
          target="_blank"
          rel="noopener noreferrer"
          className="reviews__button"
        >
          ⭐ Leave a Google Review
        </a>
      </div>
    </section>
  );
}

export default LiveReviews;
