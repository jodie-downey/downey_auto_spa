import "./Main.css";
import "../TintGallery/TintGallery";

import proImage from "../../assets/proplus.webp";
import traverse from "../../assets/traverse.webp";
import customerPhoto from "../../assets/customerfocused.webp";
import axisSide from "../../assets/axisside.webp";
import garageDoor from "../../assets/garagedoor.webp";
import blackHome from "../../assets/blackhome.webp";
import ceramicHomeDark from "../../assets/ceramichomedark.webp";
import dualReflectiveFull from "../../assets/dualreflectivefull.webp";
import blueDoor from "../../assets/bluedoor.webp";
import dualReflectiveInside from "../../assets/dualreflectiveinside.webp";
import dualReflectiveOutside from "../../assets/dualreflectiveoutside.webp";
import frostedMultiple from "../../assets/frostedmultiple.webp";
import frostedInside from "../../assets/frostinterior.webp";
import silverReflective from "../../assets/spinestopfull.webp";
import partialHome from "../../assets/partialhome.webp";

import TintGallery from "../TintGallery/TintGallery";
import WeatherRecommendations from "../WeatherRecommendations/WeatherRecommendations";
import Preloader from "../Preloader/Preloader";
import LiveReviews from "../Reviews/LiveReviews";

const archTintItems = [
  {
    id: "1",
    size: "md",
    src: axisSide,
    alt: "Ceramic architectural tint",
    caption: "50% Ceramic Non-Mirrored Heat Reduction Tint",
  },
  {
    id: "2",
    size: "md",
    src: garageDoor,
    alt: "Sputtered Architectural tint",
    caption: "20% Sputtered Mirrored Heat and Glare Reduction tint",
  },
  {
    id: "3",
    size: "sm",
    src: ceramicHomeDark,
    alt: "Ceramic architectural tint",
    caption: "15% Ceramic Non-Mirrored Heat Reduction Tint",
  },
  {
    id: "4",
    size: "sm",
    src: dualReflectiveFull,
    alt: "15% Dual Reflective Full Home Tint",
    caption: "15% Dual Reflective Mirrored Heat and Glare Reduction Tint",
  },
  {
    id: "5",
    size: "md",
    src: dualReflectiveOutside,
    alt: "15% tops, 25% bottoms Dual Reflective Full Home Tint",
    caption:
      "15% tops, 25% bottoms Dual Reflective Mirrored Heat and Glare Reduction Tint",
  },
  {
    id: "6",
    size: "md",
    src: blueDoor,
    alt: "15% Dual Reflective on door",
    caption: "15% Dual Reflective Mirrored Heat and Glare Reduction Tint",
  },
  {
    id: "7",
    size: "md",
    src: dualReflectiveInside,
    alt: "15% tops, 25% bottoms Dual Reflective Full Home Tint from the inside",
    caption:
      "15% tops, 25% bottoms Dual Reflective Mirrored Heat and Glare Reduction Tint from the inside",
  },
  {
    id: "8",
    size: "md",
    src: frostedMultiple,
    alt: "White Frosted Day and Night Privacy tint",
    caption: "White Frosted Day and Night Privacy tint from the inside",
  },
  {
    id: "9",
    size: "sm",
    src: blackHome,
    alt: "Ceramic architectural tint",
    caption: "5% Ceramic Non-Mirrored Heat Reduction Tint",
  },
  {
    id: "10",
    size: "sm",
    src: frostedInside,
    alt: "White Frosted Day and Night Privacy tint",
    caption: "White Frosted Day and Night Privacy tint from the inside",
  },
  {
    id: "11",
    size: "sm",
    src: silverReflective,
    alt: "5% Industrial Highly Reflective OneWay Mirrored Daytime Privacy and Heat rejction tint",
    caption:
      "5% Industrial Highly Reflective OneWay Mirrored Daytime Privacy and Heat rejction tint",
  },
  {
    id: "12",
    size: "sm",
    src: partialHome,
    alt: "15% Dual Reflective Mirrored Heat and Glare Reduction Tint",
    caption: "15% Dual Reflective Mirrored Heat and Glare Reduction Tint",
  },
];

function Main({ weatherData }) {
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
      </div>
      <LiveReviews />
      <div className="main__service-highlight">
        <div className="main__service-wrapper">
          <img
            className="main__service-image"
            src={proImage}
            alt="service image"
          />
          <h2 className="main__service-title">Ceramic Coatings</h2>
          <p className="main__service-description">
            At Downey Auto Spa, we specialize in SystemX ceramic coating to
            provide your vehicle with a durable, high-gloss finish that resists
            scratches, UV rays, and environmental contaminants. Our
            comprehensive paint correction services address imperfections such
            as scratches, swirl marks, and oxidation, restoring your vehicle’s
            paint to its original brilliance.{" "}
          </p>
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
          SAVE MONEY ON ENERGY SAVINGS AND TRANSFORM YOUR HOME OR OFFICE
        </h3>
        <TintGallery items={archTintItems} />
      </div>
    </main>
  );
}
export default Main;
