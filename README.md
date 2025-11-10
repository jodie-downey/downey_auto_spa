# Downey Auto Spa — Full-Stack MVP

Overview

Downey Auto Spa is a professional automotive and architectural detailing web application built to modernize client interaction, streamline service presentation, and demonstrate real API integration.
This MVP reflects the complete front-end architecture, reusable component design, and live weather-based recommendations tailored for clients in Franklin, KY and surrounding areas.

## Core Features

✅ Reusable Components
Built with modular, scalable React components such as ServiceCard, ModalWithForm, and VideoCard, ensuring maintainability and flexibility for future API integrations.

✅ Dynamic Weather Integration (OpenWeather API)
Fetches live local weather conditions and filters them through a custom logic function to provide relevant service recommendations.
Example: “Clear skies with high UV? — Recommend Nanoflex Tint + Max G+ Ceramic Coating.”

✅ Custom Modal System
Reused across multiple form types, styled with the brand’s accent color (#39ecfe).
Includes keyboard accessibility, click-outside close handling, and a reusable form layout (ModalWithForm).

✅ Service Catalog Grid
A visually dynamic, responsive grid layout featuring all detailing, tinting, and ceramic coating packages.
Supports internal routing for deep-linking to pricing and quote request pages.

✅ Preloader Component (MVP)
Branded loading animation while fetching live weather data, built for future expansion into global async events like form submissions.

## Design & Branding

Color Palette: Deep navy background #1d2b45 + Electric blue accent #39ecfe

Typography: Saira Condensed (bold/medium), Molle (accent headings)

Visual Theme: Clean, professional, modern with high-contrast legibility

Icons: Lucide-React for lightweight, consistent line icons

## Tech Stack

Frontend: React (Vite)

Styling: CSS3 (BEM methodology)

API Integration: OpenWeather API

Icons: Lucide-React

### Live Project

[View Live Site](https://jodie-downey.github.io/downey_auto_spa/)

## ## Weather-Based Service Logic

Implemented inside filterWeatherData() and getServiceRecommendations().

Condition Recommended Services
☀️ Clear & Hot Nanoflex Tint, Max G+ Coating
🌧️ Rain Glass+ Coating, Terraflex Tint
❄️ Snow Pro+ Coating, Glass+ Coating
🌫️ Mist/Fog Glass+ Coating, Terraflex Tint
☁️ Mild/Overcast Pro+ Coating, Panaflex Tint

Each condition maps to actual services displayed dynamically in the WeatherRecommendations component.

## Photos
[api weather requested services](./src/assets/README/api-recommended-weather.png)
[responsive design for optimal user experience](./src//assets/README/responsive_design.png)
[grid layout for customer comparison](./src/assets/README/grid-layout.png)
[focused modal for price lists](./src/assets/README/price_list-modal.png)
[custom quote modal](./src/assets/README/custom_quote-modal.png)

## Future Iterations

Form submission with backend notifications (email or API)

Global preloader during quote submissions

Day/night adaptive header accents

API-based customer reviews integration

Expanded data-driven recommendations using UV, IR, and humidity values

## Author

Jodie Downey
Owner/Operator of Downey Auto Spa • Software Engineering Student, TripleTen
