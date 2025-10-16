import "./ServiceCard.css";

function ServiceCard({
  title,
  description,
  image,
  quoteLink = "#",
  priceLink = "#",
}) {
  return (
    <div className="service__card">
      <img className="service__card-image" src={image} alt={`${title} image`} />
      <h3 className="service__card-title">{title}</h3>
      <ul className="service__card-description">
        {description.map((item, index) => {
          return (
            <li className="service__card-list-item" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
      <div className="service__card-buttons">
        <a
          className="service__card-button service__card-button-price"
          href={priceLink}
        >
          View Price Lists
        </a>
        <a
          className="service__card-button service__card-button-quote"
          href={quoteLink}
        >
          Get a Custom Quote
        </a>
      </div>
    </div>
  );
}

export default ServiceCard;
