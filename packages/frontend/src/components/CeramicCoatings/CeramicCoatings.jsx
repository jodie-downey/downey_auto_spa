import "./CeramicCoatings.css";

import crystal from "../../assets/crystal.webp";
import SystemX from "../../assets/SystemX.webp";
import wheelCoating from "../../assets/wheelcoating.webp";
import Trailer from "../../assets/trailer.webp";
import Tractor from "../../assets/tractor.webp";
import TractorOne from "../../assets/tractor1.webp";
import tankerTrailer from "../../assets/tankertrailer.webp";
import max from "../../assets/max.webp";
import revive from "../../assets/revive.webp";
import proPlus from "../../assets/proplus.webp";
import avaitor from "../../assets/avaitor.webp";
import jeep from "../../assets/jeepcoating.webp";

import TintGallery from "../TintGallery/TintGallery";

const ceramicCoatingItems = [
  {
    id: "1",
    size: "md",
    src: crystal,
    alt: "Crystal Plus Three Year SystemX Ceramic Coating",
    caption:
      "Single Stage Buff plus Crystal Plus Three Year SystemX Ceramic Coating",
  },
  {
    id: "2",
    size: "sm",
    src: wheelCoating,
    alt: "Wheel SystemX Ceramic Coating",
    caption:
      "Wheel SystemX Ceramic Coating Specially designed to repell brake dust and road grime",
  },
  {
    id: "3",
    size: "md",
    src: Tractor,
    alt: "Pro+ 6 Year SystemX Ceramic Coating",
    caption: "Pro+ 6 Year SystemX Ceramic Coating on Restored Sod Tractor",
  },
  {
    id: "4",
    size: "md",
    src: max,
    alt: "Max+ Lifetime SystemX Ceramic Coating",
    caption: "Single Stage Buff pluss Max+ Lifetime SystemX Ceramic Coating",
  },
  {
    id: "5",
    size: "sm",
    src: revive,
    alt: "Revive Black Trim SystemX Ceramic Coating",
    caption:
      "Single Stage buff, crystal plus three year ceramic coating, Revive Black Trim SystemX Ceramic Coating",
  },
  {
    id: "6",
    size: "md",
    src: tankerTrailer,
    alt: "Pro+ 6 Year SystemX Ceramic Coating",
    caption: "Pro+ 6 Year SystemX Ceramic Coating",
  },
  {
    id: "7",
    size: "sm",
    src: proPlus,
    alt: "Pro+ 6 Year SystemX Ceramic Coating",
    caption: "Pro+ 6 Year SystemX Ceramic Coating",
  },
  {
    id: "8",
    size: "sm",
    src: Trailer,
    alt: "Max+ 10 Year SystemX Ceramic Coating",
    caption: "Max+ 10 Year Commercial SystemX Ceramic Coating",
  },
  {
    id: "9",
    size: "sm",
    src: TractorOne,
    alt: "Pro+ 6 Year SystemX Ceramic Coating",
    caption: "Pro+ 6 Year SystemX Ceramic Coating on Pulling Tractor",
  },
  {
    id: "10",
    size: "sm",
    src: avaitor,
    alt: "Pro+ 6 Year SystemX Ceramic Coating",
    caption:
      "Pro+ 6 Year SystemX Ceramic Coating, Wheel Coating and Windshield",
  },
  {
    id: "11",
    size: "sm",
    src: jeep,
    alt: "Pro+ 6 Year SystemX Ceramic Coating",
    caption:
      "Two Stage Buff and Pro+ 6 Year SystemX Ceramic Coating, Wheel Coating and Windshield",
  },
];

function CeramicCoatings() {
  return (
    <section className="ceramic__coating">
      <div className="ceramic__coating-upper">
        <div className="ceramic__coating-upper-text">
          <h1 className="ceramic__coating-title">
            ULTIMATE AUTOMOTIVE, EQUIPMENT AND MARINE PROTECTION
          </h1>
          <h2 className="ceramic__coating-subtitle">
            CARFAX Registered Ceramic Coatings
          </h2>
          <p className="ceramic__coating-description">
            We have partnered with a worldwide network of SystemX installers to
            provide our customers with the industry standard in ceramic coating.
            SystemX coatings interlock its molecular structure with the surface
            molecules of your paint to actually become the functional surface of
            your paint. With up to a lifetime warranty and the slickest ceramic
            coating on the market, you can know your vehicle will be protected
            for years to come! Also available in marine for your boat and
            commercial for your equipment.
          </p>
        </div>
        <div className="ceramic__coating-upper-logo">
          <img
            className="ceramic__coating-logo"
            src={SystemX}
            alt="SystemX Logo"
          />
        </div>
      </div>
      <div className="ceramic__coating-grid">
        <TintGallery items={ceramicCoatingItems} />
      </div>
    </section>
  );
}

export default CeramicCoatings;
