import "./WeatherRecommendations.css";
import { Sun, CloudRain, Snowflake, Cloud, Wind } from "lucide-react";

function WeatherRecommendations({ weatherData }) {
  if (!weatherData || !weatherData.recommendations) return null;

  const { condition, recommendations } = weatherData;

  const conditionIcons = {
    clear: <Sun size={36} color="#39ecfe" />,
    rain: <CloudRain size={36} color="#39ecfe" />,
    snow: <Snowflake size={36} color="#39ecfe" />,
    clouds: <Cloud size={36} color="#39ecfe" />,
    wind: <Wind size={36} color="#39ecfe" />,
  };

  return (
    <section className="weather__recommendations">
      <h2 className="weather__recommendations-title">
        Recommended for Today’s Weather
      </h2>

      <div className="weather__recommendations-grid">
        <div className="weather__recommendations-card">
          <div className="weather__recommendations-icon">
            {conditionIcons[condition] || conditionIcons.clouds}
          </div>
          <p className="weather__recommendations-condition">
            {condition.charAt(0).toUpperCase() + condition.slice(1)}
          </p>
          <ul className="weather__recommendations-list">
            {recommendations.map((service, index) => (
              <li key={index}>
                <strong>{service.title}</strong>
                <p className="weather__recommendations-tagline">
                  {service.tagline}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WeatherRecommendations;
