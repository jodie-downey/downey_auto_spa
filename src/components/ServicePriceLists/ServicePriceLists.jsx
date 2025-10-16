import { useState } from "react";
import "./ServicePriceLists.css";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import ceramicCoatings from "../../assets/ceramicpricelist.webp";
import detailingList from "../../assets/detailingPriceList.webp";
import carbonPrices from "../../assets/carbonPrices.webp";
import ceramicTintPrices from "../../assets/ceramicTintPrices.webp";

function ServicePriceLists() {
  const images = [
    { src: ceramicCoatings, alt: "Ceramic Coating Price List" },
    { src: ceramicTintPrices, alt: "Ceramic Window Tint Price List" },
    { src: carbonPrices, alt: "Carbon Tint Price List" },
    { src: detailingList, alt: "Detailing Services Price List" },
  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => setCurrentIndex(index);
  const closeImage = () => setCurrentIndex(null);
  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i > 0 ? i - 1 : images.length - 1));
  };
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i < images.length - 1 ? i + 1 : 0));
  };

  return (
    <section className="service__price-list">
      <h1 className="service__price-list-title">CLEAR AND UPFRONT PRICING</h1>
      <p className="service__price-list-description">
        Historically, professionals in our field made pricing complicated and
        ambiguous; we didn’t find that to be the best practice for our valued
        clients. Please take a look at our price lists and contact us for a
        detailed and personalized quote for your project!
      </p>

      <div className="service__price-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            onClick={() => openImage(index)}
            className="service__price-image"
          />
        ))}
      </div>

      {currentIndex !== null && (
        <div className="service__price-overlay" onClick={closeImage}>
          <button
            className="service__price-nav service__price-nav--prev"
            onClick={prevImage}
          >
            <ChevronLeft size={40} />
          </button>
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="service__price-overlay-image"
          />
          <button
            className="service__price-nav service__price-nav--next"
            onClick={nextImage}
          >
            <ChevronRight size={40} />
          </button>
          <button className="service__price-close" onClick={closeImage}>
            <X size={28} />
          </button>
        </div>
      )}
    </section>
  );
}

export default ServicePriceLists;
