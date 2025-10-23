import "./TintGallery.css";

function TintGallery({ items = [] }) {
  return (
    <section
      className="tint__gallery"
      aria-label="Architectural window tint gallery"
    >
      {items.map((item) => (
        <article
          key={item.id}
          className={`tint__gallery-item tint__gallery-item--${
            item.size || "md"
          }`}
        >
          <img
            src={item.src}
            alt={item.alt}
            className="tint__gallery-image"
            loading="lazy"
            decoding="async"
          />
          {item.caption && (
            <h3 className="tint__gallery-caption">{item.caption}</h3>
          )}
        </article>
      ))}
    </section>
  );
}

export default TintGallery;
