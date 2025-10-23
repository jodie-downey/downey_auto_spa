import { useState } from "react";
import "./VideoCard.css";

function VideoCard({ videoId, title, description }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumb = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const iframeSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

  return (
    <article className="video__card">
      <div className="video__card-media">
        {!isPlaying ? (
          <button
            className="video__card-thumb"
            onClick={() => setIsPlaying(true)}
            aria-label={`Play video: ${title}`}
          >
            <img
              src={thumb}
              alt={`Thumbnail for ${title}`}
              className="video__card-image"
              loading="lazy"
              decoding="async"
            />
            <span className="video__card-play" aria-hidden="true">
              ▶
            </span>
          </button>
        ) : (
          <div className="video__card-iframe">
            <iframe
              src={iframeSrc}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        )}
      </div>

      {title && <h3 className="video__card-title">{title}</h3>}
      {description && <p className="video__card-description">{description}</p>}
    </article>
  );
}

export default VideoCard;
