export const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../assets/downey_auto_spa_logo.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "cloudy",
    url: new URL("../assets/downey_auto_spa_logo.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "drizzle",
    url: new URL("../assets/downey_auto_spa_logo.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "thunderstorm",
    url: new URL("../assets/downey_auto_spa_logo.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "snow",
    url: new URL("../assets/downey_auto_spa_logo.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../assets/downey_auto_spa_logo.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "cloudy",
    url: new URL("../assets/downey_auto_spa_logo.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "drizzle",
    url: new URL("../assets/downey_auto_spa_logo.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "thunderstorm",
    url: new URL("../assets/downey_auto_spa_logo.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../assets/downey_auto_spa_logo.svg", import.meta.url).href,
  },
];

export const defaultWeatherOption = {
  day: {
    url: new URL("../assets/downey_auto_spa_logo.svg", import.meta.url).href,
  },
  night: {
    url: new URL("../assets/downey_auto_spa_logo.svg", import.meta.url).href,
  },
};

export const coordinates = {
  latitude: 36.722263,
  longitude: -86.5772177,
};

export const APIkey = import.meta.env.VITE_OPENWEATHER_KEY;
