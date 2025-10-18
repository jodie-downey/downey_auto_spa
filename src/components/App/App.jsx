import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Main from "../Main/Main";
import AboutUs from "../AboutUs/AboutUs";
import WindowTintPackages from "../WindowTintPackages/WindowTintPackages";
import ServicePriceLists from "../ServicePriceLists/ServicePriceLists";
import CeramicCoatings from "../CeramicCoatings/CeramicCoatings";
import QuoteModal from "../QuoteModal/QuoteModal";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { getweather, filterWeatherData } from "../WeatherCard/WeatherCard";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "cold",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });

  const [activeModal, setActiveModal] = useState("");

  //*API toggle switch
  //const handleToggleSwitchChange = () => {
  //setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  //};

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

  //*API
  //useEffect(() => {
  //getweather(coordinates, APIkey)
  //.then((data) => {
  //const filteredData = filterWeatherData(data);
  //setWeatherData(filteredData);
  //})
  //.catch(console.error);
  //}, []);

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

  useEffect(() => {
    getweather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route path="/" element={<Main weatherData={weatherData} />}></Route>
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
          <Route path="/ceramic-coatings" element={<CeramicCoatings />}></Route>
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
  );
}

export default App;
