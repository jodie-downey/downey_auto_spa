import { Link } from "react-router-dom";
import "./Main.css";

import proImage from "../../assets/proplus.webp";
import traverse from "../../assets/traverse.webp";
import customerPhoto from "../../assets/customerfocused.webp";

import PhotoGallery from "../PhotoGallery/PhotoGallery";
import homeGalleryItems from "./homeGalleryData";
import WeatherRecommendations from "../WeatherRecommendations/WeatherRecommendations";
import Preloader from "../Preloader/Preloader";
import LiveReviews from "../Reviews/LiveReviews";

function Main({ weatherData, handleQuoteButtonClick }) {
  return (
    <main className="main">
      <div className="main__hero">
        <video className="main__hero-video" autoPlay muted loop playsInline>
          <source src="/videos/hero_clips.mp4" type="video/mp4" />
        </video>

        <div className="main__hero-content">
          <h1 className="main__hero-title">
            Discover Unmatched Excellence in Professional Detailing & Window
            Tinting
          </h1>

          <p className="main__hero-subtitle">
            South Central KY’s leading experts in ceramic coatings, window
            tinting, and paint correction
          </p>
        </div>
        <div className="main__hero-cta-wrapper">
          <a
            className="main__hero-cta"
            href="https://www.book.downeyautospa.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
          <button
            className="main__hero-cta main__hero-cta--secondary"
            onClick={() => handleQuoteButtonClick("hero")}
          >
            Get a Quote
          </button>
        </div>
      </div>
      <LiveReviews />
      <div className="main__service-highlight">
        <div className="main__service-wrapper">
          <img
            className="main__service-image"
            src={proImage}
            alt="SystemX Pro+ Ceramic Coating"
          />
          <h2 className="main__service-title">
            Ceramic Coating by Certified SystemX Installers
          </h2>
          <p className="main__service-description">
            Stop waxing. Start protecting. SystemX ceramic coating bonds to your
            paint at a molecular level — delivering years of protection,
            effortless cleaning, and a gloss that wax can’t replicate.
          </p>
          <Link to="/ceramic-coatings" className="main__service-link">
            See Packages →
          </Link>
        </div>
        <div className="main__service-wrapper">
          <img
            className="main__service-image"
            src={traverse}
            alt="service image"
          />
          <h2 className="main__service-title">Window Tinting</h2>
          <p className="main__service-description">
            Our advanced automotive window tinting services not only enhance the
            aesthetics of your car but also improve privacy and reduce heat,
            ensuring a cooler and more comfortable ride. For those looking to
            elevate their home or business environment, our professional home
            window tinting and business window tinting solutions offer superior
            glare reduction, energy efficiency, and UV protection.
          </p>
        </div>
        <div className="main__service-wrapper">
          <img
            className="main__service-image"
            src={customerPhoto}
            alt="service image"
          />
          <h2 className="main__service-title">Customer Focused Care</h2>
          <p className="main__service-description">
            At Downey Auto Spa, our mission is to help you turn your new or new
            to you vehicle into exactly what you're dreaming of. Drop your
            vehicle with us or wait in our waiting room for your transformation!
            We dont stop at vehicles either, heavy equipment, boats, commercial
            trucks etc welcome! Estimates are always free, even for home and
            architectural window tinting!
          </p>
        </div>
      </div>
      <section className="weather-section">
        {!weatherData ? (
          <Preloader message="Loading live weather..." />
        ) : (
          <WeatherRecommendations weatherData={weatherData} />
        )}
      </section>
      <div className="main__tint-gallery">
        <h3 className="main__tint-gallery-title">
          CERAMIC COATING AND WINDOW TINTING SERVICE SPOTLIGHT
        </h3>
        <PhotoGallery items={homeGalleryItems} sectionName="home_gallery" />
      </div>
    </main>
  );
}
export default Main;
