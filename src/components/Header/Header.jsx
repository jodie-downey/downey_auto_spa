import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Menu, X } from "lucide-react";
import SocialLinks from "../SocialLinks/SocialLinks";
import "./Header.css";
import Logo from "../../assets/downey_auto_spa_logo.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__upper-container">
        <div className="header__link-container">
          <a className="header__number" href="tel:+12707763914">
            <Phone size={20} />
            270-776-3914
          </a>
          <a
            className="header__address"
            href="https://www.google.com/maps/place/?q=place_id:ChIJ2WhtOE-5ZYgRJDJLH_jFRfI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={20} />
            104 State St, Unit 3, Franklin, KY 42134
          </a>
          <a className="header__email" href="mailto:jodie@downeyautospa.com">
            <Mail size={20} />
            jodie@downeyautospa.com
          </a>
        </div>

        <div className="header__logo-menu-container">
          <Link to="/">
            <img
              className="header__logo"
              src={Logo}
              alt="Downey Auto Spa logo"
            />
          </Link>
          <button
            className="header__hamburger"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className="header__socialLinks-container">
          <p className="header__socialLinks-title">
            Check out more work on our Socials!
          </p>
          <SocialLinks />
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="header__lower-container">
        <Link to="/window-tint-packages">
          <p className="header__window-tint">Window Tint Packages</p>
        </Link>
        <Link to="/ceramic-coatings">
          <p className="header__ceramic-coatings">Ceramic Coatings</p>
        </Link>
        <Link to="/price-lists">
          <p className="header__price-lists">Service Price List</p>
        </Link>
        <Link to="/services">
          <p className="header__services">Services</p>
        </Link>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="header__nav-mobile">
          <Link to="/" onClick={closeMenu}>
            {" "}
            Home
          </Link>
          <Link to="/window-tint-packages" onClick={closeMenu}>
            Window Tint Packages
          </Link>
          <Link to="/ceramic-coatings" onClick={closeMenu}>
            Ceramic Coatings
          </Link>
          <Link to="/price-lists" onClick={closeMenu}>
            Service Price List
          </Link>
          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
