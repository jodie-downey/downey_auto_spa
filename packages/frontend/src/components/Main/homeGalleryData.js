// Ceramic Coatings
import zr2CeramicCoating from "../../assets/zr2CeramicCoating.webp";
import dodgeCeramicCoating from "../../assets/dodgeCeramicCoating.webp";
import jeepcoating from "../../assets/jeepcoating.webp";
import wheelcoating from "../../assets/wheelcoating.webp";
import buickencore from "../../assets/buickencore.webp";
import interiorCeramicCoating from "../../assets/interiorCeramicCoating.webp";

// Automotive Window Tinting
import traverse from "../../assets/traverse.webp";
import cadillacCeramicTint from "../../assets/cadillacCeramicTint.webp";
import mercedesVanTint from "../../assets/mercedesVanTint.webp";
import axisinside from "../../assets/axisinside.webp";
import yukonat4 from "../../assets/yukonat4.webp";

// Architectural Tinting
import dualreflectivefull from "../../assets/dualreflectivefull.webp";
import onlyDaughter from "../../assets/onlyDaughter.webp";
import thortonHome from "../../assets/thortonHome.webp";

// Fleet & Commercial
import tankertrailer from "../../assets/tankertrailer.webp";
import excavator from "../../assets/excavator.webp";
import sidebyside from "../../assets/sidebyside.webp";

// Row pattern: A (lg+sm) → B (md+md+md) → C (sm+lg) → repeat → end on B
// lg: 8 col, 16:9  |  sm: 4 col, 8:9 (same height as lg)  |  md: 4 col, 4:3

const homeGalleryItems = [
  // Row A
  {
    id: 1,
    src: zr2CeramicCoating,
    alt: "SystemX ceramic coating on Chevy ZR2",
    caption: "Paint Correction & Ceramic Coating (Crytal+) — ZR2",
    size: "lg",
  },
  {
    id: 2,
    src: wheelcoating,
    alt: "Ceramic wheel coating detail",
    caption: "Ceramic Coating (Wheel) - Jeep",
    size: "sm",
  },

  // Row B
  {
    id: 3,
    src: traverse,
    alt: "Automotive window tint on Traverse",
    caption: "Ceramic Tint - Traverse",
    size: "md",
  },
  {
    id: 4,
    src: cadillacCeramicTint,
    alt: "Ceramic window tint on Cadillac",
    caption: "Ceramic Tint — Cadillac",
    size: "md",
  },
  {
    id: 5,
    src: mercedesVanTint,
    alt: "Window tint on Mercedes Sprinter van",
    caption: "Ceramic Tint - Sprinter Van",
    size: "md",
  },

  // Row C
  {
    id: 6,
    src: axisinside,
    alt: "Interior view of architectural window tint",
    caption: "Ceramic Tint (50%) - Office Storefront",
    size: "sm",
  },
  {
    id: 7,
    src: dualreflectivefull,
    alt: "Dual reflective architectural film on commercial building",
    caption: "Dual Reflective Tint (15%) — Full Home",
    size: "lg",
  },

  // Row A
  {
    id: 8,
    src: jeepcoating,
    alt: "SystemX ceramic coating on Jeep",
    caption: "Paint Correction & Ceramic Coating (Pro+) — Jeep",
    size: "lg",
  },
  {
    id: 9,
    src: buickencore,
    alt: "Ceramic Window Tinting on Buick Encore",
    caption: "Ceramic Tint — Buick Encore",
    size: "sm",
  },

  // Row B
  {
    id: 10,
    src: onlyDaughter,
    alt: "Ceramic architectural film on boutique storefront",
    caption: "Ceramic Tint (50%) — Boutiqe Storefront",
    size: "md",
  },
  {
    id: 11,
    src: thortonHome,
    alt: "Ceramic Window Tinting on black home",
    caption: "Ceramic Tint (20%) - Home",
    size: "md",
  },
  {
    id: 12,
    src: sidebyside,
    alt: "Window tinting on side by side ATV",
    caption: "Carbon Tint - Side By Side",
    size: "md",
  },

  // Row C
  {
    id: 13,
    src: interiorCeramicCoating,
    alt: "Interior ceramic coating detail",
    caption: "Interior Ceramic Coating (LVP) - ZR2",
    size: "sm",
  },
  {
    id: 14,
    src: dodgeCeramicCoating,
    alt: "SystemX ceramic coating on Dodge",
    caption: "Paint Correction & Ceramic Coating (Crystal+) - Dodge Ram",
    size: "lg",
  },

  // Row B
  {
    id: 15,
    src: yukonat4,
    alt: "Window tint on Yukon AT4",
    caption: "Ceramic Tint — Yukon AT4",
    size: "md",
  },
  {
    id: 16,
    src: tankertrailer,
    alt: "Window tinting on commercial tanker trailer",
    caption: "Ceramic Tint - Commercial Fleet Fuel Tank Trailer",
    size: "md",
  },
  {
    id: 17,
    src: excavator,
    alt: "Window tinting on heavy equipment excavator",
    caption: "Ceramic Tint - Heavy Equipment 20%",
    size: "md",
  },
];

export default homeGalleryItems;
