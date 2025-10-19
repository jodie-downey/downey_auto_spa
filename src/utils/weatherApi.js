import { checkResponse } from "./api";
import services from "./services";

//export const getWeather = (latitude, longitude, APIkey) => {
//return fetch(
// `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
// ).then(checkResponse);
//};
export const getWeather = (lat, lon, APIkey) => {
  console.log("Fetching weather for lat:", lat, "lon:", lon);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${APIkey}`
      )
        .then((res) => {
          if (!res.ok) throw new Error("Weather fetch failed");
          return res.json();
        })
        .then(resolve)
        .catch(reject);
    }, 3000); // 👈 delay by 3 seconds to test preloader
  });
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = {
    F: Math.round(data.main.temp),
    C: Math.round((data.main.temp - 32) * (5 / 9)),
  };
  result.type = getWeatherType(result.temp.F);
  result.condition = data.weather[0].main.toLowerCase();
  result.isDay = isDay(data.sys, Date.now());

  result.recommendations = getServiceRecommendations({
    tempF: result.temp.F,
    condition: result.condition,
    isDay: result.isDay,
  });

  return result;
};

const isDay = ({ sunrise, sunset }, now) => {
  return sunrise * 1000 < now && now < sunset * 1000;
};

export const getWeatherType = (temperature) => {
  if (temperature >= 80) {
    return "hot";
  } else if (temperature >= 50 && temperature < 80) {
    return "warm";
  } else {
    return "cold";
  }
};

function getServiceRecommendations({ tempF, condition, isDay }) {
  let recommendations = [];

  if (condition.includes("clear") || condition.includes("sun")) {
    recommendations = [
      {
        ...services.find((s) => s.title.includes("Nanoflex")),
        tagline: "High-performance ceramic tint — beat the heat and UV rays.",
      },
      {
        ...services.find((s) => s.title.includes("Max G+")),
        tagline: "Top-tier ceramic coating for ultimate gloss and protection.",
      },
      {
        ...services.find((s) => s.title.includes("DualFlex")),
        tagline: "Reflective architectural tint for glare control and privacy.",
      },
    ];
  } else if (condition.includes("rain")) {
    recommendations = [
      {
        ...services.find((s) => s.title.includes("Glass+")),
        tagline: "Enhance visibility and water repellency during rainfall.",
      },
      {
        ...services.find((s) => s.title.includes("Terraflex")),
        tagline: "Durable tint with great clarity and moisture resistance.",
      },
    ];
  } else if (condition.includes("snow")) {
    recommendations = [
      {
        ...services.find((s) => s.title.includes("Pro+")),
        tagline: "Shield your paint from salt and slush with Pro+ Ceramic.",
      },
      {
        ...services.find((s) => s.title.includes("Glass+")),
        tagline: "Add glass coating for easy winter de-icing and visibility.",
      },
    ];
  } else if (condition.includes("cloud") || condition.includes("mist")) {
    recommendations = [
      {
        ...services.find((s) => s.title.includes("Panaflex")),
        tagline: "Balanced ceramic tint for mild temperatures and low sun.",
      },
      {
        ...services.find((s) => s.title.includes("Pro+")),
        tagline: "Mid-range coating ideal for everyday protection.",
      },
    ];
  } else {
    recommendations = [
      {
        ...services.find((s) => s.title.includes("Nanoflex")),
        tagline: "All-weather ceramic tint for lasting comfort.",
      },
      {
        ...services.find((s) => s.title.includes("Pro+")),
        tagline: "Dependable protection — rain or shine.",
      },
    ];
  }

  return recommendations.filter(Boolean);
}
