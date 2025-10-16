import { Link } from "react-router-dom";
import { Phone, MapPin, Mail } from "lucide-react";

import SocialLinks from "../SocialLinks/SocialLinks";
import "./Header.css";

import Logo from "../../assets/downey_auto_spa_logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__upper-container">
        <div className="header__link-container">
          <a
            className="header__number"
            href="tel:+12707763914"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone size={20} />
            270-776-3914
          </a>
          <a
            className="header__address"
            href="https://www.google.com/maps/place/Downey+Auto+Spa/@36.7098784,-86.5777453,562m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8865b94f386d68d9:0xf245c5f81f4b3224!8m2!3d36.7098784!4d-86.5751704!16s%2Fg%2F11flpjd3g8?authuser=0&entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={20} />
            104 State St, Unit 3, Franklin, KY 42134
          </a>
          <a className="header__email" href="mailto:jodie@downeyautospa.com">
            <Mail size={20} />
            jodie@downeyautospa.com{" "}
          </a>
        </div>
        <div className="header__logo-mesnu-container">
          <Link to="/">
            <img className="header__logo" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="header__socialLinks-container">
          <p className="header__socialLinks-title">
            Check out more work on our Socials!
          </p>
          <SocialLinks />
        </div>
      </div>
      <div className="header__lower-container">
        <Link to="/window-tint-packages">
          <p className="header__window-tint">Window Tint Packages</p>
        </Link>
        <Link to="/ceramic-coatings">
          <p className="header__ceramic-coatings">Ceramic Coatings</p>
        </Link>
        <Link to="/price-lists">
          <p className="header__price-lists">Service Price List</p>
        </Link>
        <Link to="/about">
          <p className="header__about-us" alt="AboutUs">
            AboutUs
          </p>
        </Link>
      </div>
    </header>
  );
}

export default Header;
