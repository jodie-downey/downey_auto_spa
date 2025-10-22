import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOption } from "../../utils/constants";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTempetureContext";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  if (!weatherData) return <p>Loading weather...</p>;

  const weatherOption = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  const weatherToDisplay =
    weatherOption.length > 0
      ? weatherOption[0]
      : defaultWeatherOption[weatherData.isDay ? "day" : "night"];

  return (
    <section className="weather__card">
      <p className="weather__card-temp">
        {weatherData.temp[currentTemperatureUnit]} &deg;{" "}
        {currentTemperatureUnit}
      </p>
      <img
        className="weather-card__image"
        src={weatherToDisplay.url}
        alt={weatherData.condition}
      />
    </section>
  );
}

export default WeatherCard;
