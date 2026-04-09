import archwindow from "../../assets/archwindow.webp";
import axisfull from "../../assets/axisfull.webp";
import bluedoor from "../../assets/bluedoor.webp";
import foxhole from "../../assets/foxholeArmory.webp";
import gargaedoor from "../../assets/garagedoor.webp";
import linkhome from "../../assets/linkHome.webp";
import onlyDaughter from "../../assets/onlyDaughter.webp";
import spinestop from "../../assets/spinestopfull.webp";
import spinestepinside from "../../assets/spinestopinside.webp";
import sputtered from "../../assets/sputtered.webp";
import dualreflectivefull from "../../assets/dualreflectivefull.webp";
import dualreflectiveoutside from "../../assets/dualreflectiveoutside.webp";
import dualreflectiveinside from "../../assets/dualreflectiveinside.webp";
import reflective from "../../assets/reflective.webp";
import ceramichome from "../../assets/ceramichome.webp";
import ceramichomedark from "../../assets/ceramichomedark.webp";
import blackhome from "../../assets/blackhome.webp";
import partialhome from "../../assets/partialhome.webp";
import salonwindow from "../../assets/salonwindow.webp";
import traderjoesoutside from "../../assets/traderjoesoutside.webp";
import traderjoesinside from "../../assets/traderjoesinside.webp";
import frostedmultiple from "../../assets/frostedmultiple.webp";
import frostexterior from "../../assets/frostexterior.webp";
import frostinterior from "../../assets/frostinterior.webp";
import halfinside from "../../assets/halfinside.webp";
import halfoutside from "../../assets/halfoutside.webp";

// Row pattern: A (lg+sm) → B (md+md+md) → C (sm+lg) → repeat → end on A
// lg: 8 col, 16:9  |  sm: 4 col, 8:9 (same height as lg)  |  md: 4 col, 4:3

const archGalleryItems = [
  // Row A
  {
    id: 1,
    src: dualreflectivefull,
    alt: "Dual reflective film — full commercial building install",
    caption: "DualFlex 15% — Home",
    size: "lg",
  },
  {
    id: 2,
    src: reflective,
    alt: "Silver reflective film on building exterior",
    caption: "Silver Reflective 15%- Commercial",
    size: "sm",
  },

  // Row B
  {
    id: 3,
    src: ceramichome,
    alt: "Ceramic film on residential home",
    caption: "Panashield 50%— Residential",
    size: "md",
  },
  {
    id: 4,
    src: ceramichomedark,
    alt: "Ceramic film darker application on home",
    caption: "Ceramic 20%— Home",
    size: "md",
  },
  {
    id: 5,
    src: blackhome,
    alt: "Solar control film on residential home",
    caption: "Ceramic 5% — Residential",
    size: "md",
  },

  // Row C
  {
    id: 6,
    src: partialhome,
    alt: "Partial home window film application",
    caption: "DualFlex 15% - Partial Application",
    size: "sm",
  },
  {
    id: 7,
    src: frostedmultiple,
    alt: "Decorative frost film on multiple office glass panels",
    caption: "Decorative White Frost — Bathroom",
    size: "lg",
  },

  // Row A
  {
    id: 8,
    src: traderjoesoutside,
    alt: "Commercial storefront window tinting exterior",
    caption: "Silver Reflecetive 20% - Commercial Warehouse",
    size: "lg",
  },
  {
    id: 9,
    src: traderjoesinside,
    alt: "Commercial storefront window tinting interior view",
    caption: "Silver Reflecetive 20% -  Commercial Interior",
    size: "sm",
  },

  // Row B
  {
    id: 10,
    src: salonwindow,
    alt: "Commercial salon window tinting",
    caption: "DualFlex 25% - Salon",
    size: "md",
  },
  {
    id: 11,
    src: frostexterior,
    alt: "Frost film exterior view",
    caption: "Frosted — Exterior Bathroom",
    size: "md",
  },
  {
    id: 12,
    src: frostinterior,
    alt: "Frost film interior view",
    caption: "Frosted — Interior Bathroom",
    size: "md",
  },

  // Row C
  {
    id: 13,
    src: halfinside,
    alt: "Half-height application interior view",
    caption: "DualFlex 15% - Half Application Interior",
    size: "sm",
  },
  {
    id: 14,
    src: dualreflectiveoutside,
    alt: "Dual reflective film exterior view",
    caption: "DualFlex 15% Uppers 25% lowers — Exterior",
    size: "lg",
  },

  // Row A
  {
    id: 15,
    src: dualreflectiveinside,
    alt: "Dual reflective film interior view",
    caption: "DualFlex 15% Uppers 25% lowers — Interior",
    size: "lg",
  },
  {
    id: 16,
    src: halfoutside,
    alt: "Half-height application exterior view",
    caption: "HDualFlex 15% - Half Application Exterior",
    size: "sm",
  },

  // Row B
  {
    id: 17,
    src: archwindow,
    alt: "Architectural window film on residential window",
    caption: "DualFlex - Arch",
    size: "md",
  },
  {
    id: 18,
    src: foxhole,
    alt: "Foxhole Armory commercial window tinting",
    caption: "DualFlex 5%— Commercial Storefront",
    size: "md",
  },
  {
    id: 19,
    src: linkhome,
    alt: "Residential home window film install",
    caption: "DualFlex 5% Door 25% windows — Basement",
    size: "md",
  },

  // Row C
  {
    id: 20,
    src: bluedoor,
    alt: "Window film on glass door panel",
    caption: "DualFlex 25% -  Door",
    size: "sm",
  },
  {
    id: 21,
    src: axisfull,
    alt: "Full commercial building window film install",
    caption: "Panashield 50% - Commercial Storefront",
    size: "lg",
  },

  // Row A
  {
    id: 22,
    src: spinestop,
    alt: "Spinestop chiropractic commercial window tinting exterior",
    caption: "DualFlex 5% - Medical Building",
    size: "lg",
  },
  {
    id: 23,
    src: spinestepinside,
    alt: "Spinestop chiropractic commercial window tinting interior view",
    caption: "DualFlex 5% - Medical Building Interior",
    size: "sm",
  },

  // Row B
  {
    id: 24,
    src: sputtered,
    alt: "Sputtered metallic window film application",
    caption: "Sputtered Metallic Film",
    size: "md",
  },
  {
    id: 25,
    src: gargaedoor,
    alt: "Window film on garage door glass panels",
    caption: "Sputtered Garage Door Glass",
    size: "md",
  },
  {
    id: 26,
    src: onlyDaughter,
    alt: "Residential home window film — full exterior",
    caption: "50% Panashield - Boutique",
    size: "md",
  },
];

export default archGalleryItems;
