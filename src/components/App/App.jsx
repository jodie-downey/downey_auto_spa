import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Main from "../Main/Main";
import AboutUs from "../AboutUs/AboutUs";
import WindowTintPackages from "../WindowTintPackages/WindowTintPackages";
import ServicePriceLists from "../ServicePriceLists/ServicePriceLists";
import CeramicCoatings from "../CeramicCoatings/CeramicCoatings";
import QuoteModal from "../QuoteModal/QuoteModal";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTempetureContext";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { getWeather, filterWeatherData } from "../../utils/weatherApi";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const [activeModal, setActiveModal] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  //*API toggle switch
  //const handleToggleSwitchChange = () => {
  //setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  //};

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

  const handleQuoteModalSubmit = (e) => {
    console.log("quote modal submitted");
    closeActiveModal();
  };
  //const handleQuoteModalSubmit = ({})=>{
  //APICALL({}).then((data) => {handle data here ; closeActiveModal();})
  //.catch((error) => {console.error(insert proper error message)})}

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
              path="/about"
              element={
                <AboutUs handleQuoteButtonClick={handleQuoteButtonClick} />
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
