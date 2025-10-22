import { Phone, MapPin, Mail } from "lucide-react";
import "./Footer.css";
import logo from "../../assets/downey_auto_spa_logo.svg";

import SocialLinks from "../SocialLinks/SocialLinks";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__logo-section">
          <img src={logo} alt="Downey Auto Spa Logo" className="footer__logo" />
          <p className="footer__tagline">Precision • Protection • Perfection</p>
        </div>

        <div className="footer__contact">
          <a href="tel:+12707763914" className="footer__link">
            <Phone size={18} /> 270-776-3914
          </a>
          <a
            href="https://www.google.com/maps/place/Downey+Auto+Spa"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <MapPin size={18} /> 104 State St, Unit 3, Franklin, KY 42134
          </a>
          <a href="mailto:jodie@downeyautospa.com" className="footer__link">
            <Mail size={18} /> jodie@downeyautospa.com
          </a>
        </div>

        <div className="footer__social">
          <p className="footer__social-title">Follow Our Work</p>
          <div className="footer__icons">
            <SocialLinks />
          </div>
        </div>
      </div>

      <hr className="footer__divider" />

      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} Downey Auto Spa. All rights reserved.
        </p>
        <p className="footer__credit">
          Designed by <span>Jodie Downey</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
