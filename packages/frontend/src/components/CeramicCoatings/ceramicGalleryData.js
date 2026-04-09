import crystal from "../../assets/crystal.webp";
import wheelCoating from "../../assets/wheelcoating.webp";
import Tractor from "../../assets/tractor.webp";
import max from "../../assets/max.webp";
import revive from "../../assets/revive.webp";
import tankerTrailer from "../../assets/tankertrailer.webp";
import proPlus from "../../assets/proplus.webp";
import Trailer from "../../assets/trailer.webp";
import TractorOne from "../../assets/tractor1.webp";
import avaitor from "../../assets/avaitor.webp";
import jeep from "../../assets/jeepcoating.webp";
import aviator from "../../assets/avaitor.webp";
import dodgeCeramicCoating from "../../assets/dodgeCeramicCoating.webp";
import glassImage from "../../assets/glassImage.webp";
import interior from "../../assets/interior.webp";

// Row pattern: A (lg+sm) → B (md+md+md) → C (sm+lg) → repeat
// lg: 8 col, 16:9  |  sm: 4 col, 8:9  |  md: 4 col, 4:3

const ceramicGalleryItems = [
  // Row A
  {
    id: 1,
    src: crystal,
    alt: "Crystal Plus Three Year SystemX Ceramic Coating",
    caption: "Crystal Plus — 3-Year SystemX Coating",
    size: "lg",
  },
  {
    id: 2,
    src: wheelCoating,
    alt: "Wheel SystemX Ceramic Coating",
    caption: "Wheel Coating — Brake Dust Protection",
    size: "sm",
  },

  // Row B
  {
    id: 3,
    src: Tractor,
    alt: "Pro+ 6 Year SystemX Ceramic Coating on sod tractor",
    caption: "Pro+ 6-Year — Restored Sod Tractor",
    size: "md",
  },
  {
    id: 4,
    src: max,
    alt: "Max G+ Lifetime SystemX Ceramic Coating",
    caption: "Max G+ Lifetime — Single Stage Buff",
    size: "md",
  },
  {
    id: 5,
    src: revive,
    alt: "Revive Black Trim SystemX Ceramic Coating",
    caption: "Crystal Plus + Revive Black Trim",
    size: "md",
  },

  // Row C
  {
    id: 6,
    src: proPlus,
    alt: "Pro+ 6 Year SystemX Ceramic Coating",
    caption: "Pro+ 6-Year — SystemX Coating",
    size: "sm",
  },
  {
    id: 7,
    src: tankerTrailer,
    alt: "Pro+ 6 Year SystemX Ceramic Coating commercial application",
    caption: "Pro+ 6-Year — Commercial Tanker",
    size: "lg",
  },

  // Row A
  {
    id: 8,
    src: Trailer,
    alt: "Max+ 10 Year SystemX Ceramic Coating on trailer",
    caption: "Max+ 10-Year — Commercial Trailer",
    size: "lg",
  },
  {
    id: 9,
    src: TractorOne,
    alt: "Pro+ 6 Year SystemX Ceramic Coating on pulling tractor",
    caption: "Pro+ 6-Year — Pulling Tractor",
    size: "sm",
  },

  // Row B
  {
    id: 10,
    src: avaitor,
    alt: "Pro+ 6 Year SystemX Ceramic Coating with wheel and windshield",
    caption: "Pro+ + Wheel + Windshield Coating",
    size: "md",
  },
  {
    id: 11,
    src: jeep,
    alt: "Two stage buff and Pro+ 6 Year SystemX Ceramic Coating",
    caption: "Two-Stage Buff + Pro+ + Wheel + Windshield",
    size: "md",
  },
  {
    id: 12,
    src: dodgeCeramicCoating,
    alt: "SystemX Ceramic Coating on Dodge",
    caption: "SystemX Ceramic Coating — Dodge",
    size: "md",
  },

  // Row C
  {
    id: 13,
    src: glassImage,
    alt: "Windshield and glass ceramic coating",
    caption: "Glass Coating — Hydrophobic Protection",
    size: "sm",
  },
  {
    id: 14,
    src: aviator,
    alt: "SystemX Ceramic Coating on Lincoln Aviator",
    caption: "SystemX Ceramic Coating — Lincoln Aviator",
    size: "lg",
  },

  // Row A
  {
    id: 15,
    src: interior,
    alt: "Interior ceramic coating application",
    caption: "Interior Ceramic Coating — LVP Protection",
    size: "lg",
  },
];

export default ceramicGalleryItems;
