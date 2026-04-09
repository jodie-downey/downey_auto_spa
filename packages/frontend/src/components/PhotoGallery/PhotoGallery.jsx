import { useEffect, useRef } from "react";
import "./PhotoGallery.css";
import { observeSectionOnce } from "../../utils/trackSectionApi.js";

function PhotoGallery({ items = [], sectionName = "photo_gallery" }) {
  const ref = useRef(null);

  useEffect(() => {
    return observeSectionOnce(ref.current, sectionName);
  }, [sectionName]);

  return (
    <section
      className="photo-gallery"
      ref={ref}
      aria-label="Photo gallery"
    >
      {items.map((item) => (
        <article
          key={item.id}
          className={`photo-gallery__item photo-gallery__item--${item.size || "md"}`}
        >
          <img
            src={item.src}
            alt={item.alt}
            className="photo-gallery__image"
            loading="lazy"
            decoding="async"
          />
          {item.caption && (
            <p className="photo-gallery__caption">{item.caption}</p>
          )}
        </article>
      ))}
    </section>
  );
}

export default PhotoGallery;
