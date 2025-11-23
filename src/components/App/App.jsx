import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Main from "../Main/Main";
import Services from "../Services/Services";
import WindowTintPackages from "../WindowTintPackages/WindowTintPackages";
import ServicePriceLists from "../ServicePriceLists/ServicePriceLists";
import CeramicCoatings from "../CeramicCoatings/CeramicCoatings";
import QuoteModal from "../QuoteModal/QuoteModal";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTempetureContext";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import TermsOfService from "../TermsOfService/TermsOfService";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";

import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { submitQuoteRequest } from "../../utils/api";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const [activeModal, setActiveModal] = useState("");
  const [currentTemperatureUnit] = useState("F");

  useEffect(() => {
    const lat = 36.7223;
    const lon = -86.5772;
    const APIkey = import.meta.env.VITE_OPENWEATHER_KEY;

    getWeather(lat, lon, APIkey)
      .then((data) => {
        const filtered = filterWeatherData(data);
        setWeatherData(filtered);
        console.log("Filtered data:", filtered);
      })
      .catch((err) => {
        console.error("weather fetch failed", err);
      });
  }, []);

  const handleQuoteButtonClick = () => {
    setActiveModal("get quote");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleQuoteModalSubmit = async (formData) => {
    try {
      const response = await submitQuoteRequest(formData);
      console.log("Quote submitted successfully:", response);
      alert("Your quote request was sent successfully!");
    } catch (err) {
      alert("There was a problem sending your quote. Please try again.");
    }
    closeActiveModal();
  };

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  return (
    <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit }}>
      <div className="page">
        <div className="page__content">
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Main weatherData={weatherData} />}
            ></Route>
            <Route
              path="/services"
              element={
                <Services handleQuoteButtonClick={handleQuoteButtonClick} />
              }
            ></Route>
            <Route
              path="/window-tint-packages"
              element={<WindowTintPackages />}
            ></Route>
            <Route path="/price-lists" element={<ServicePriceLists />}></Route>
            <Route
              path="/ceramic-coatings"
              element={<CeramicCoatings />}
            ></Route>
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
          <Footer />
          {
            <QuoteModal
              isOpen={activeModal === "get quote"}
              activeModal={activeModal}
              handleCloseClick={closeActiveModal}
              onQuoteModalSubmit={handleQuoteModalSubmit}
              handleQuoteButtonClick={handleQuoteButtonClick}
            />
          }
        </div>
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
