import maxImage from "../assets/max.webp";
import crystalImage from "../assets/crystal.webp";
import proImage from "../assets/proplus.webp";
import reviveImage from "../assets/revive.webp";
import glassImage from "../assets/glassImage.webp";
import interiorImage from "../assets/interior.webp";
import wheelCoating from "../assets/wheelcoating.webp";
import sprayImage from "../assets/spray.webp";
import boatImage from "../assets/boat.webp";
import nanoImage from "../assets/buickencore.webp";
import panaImage from "../assets/yukonat4.webp";
import terraImage from "../assets/excavator2.webp";
import dualImage from "../assets/dualreflectiveoutside.webp";
import silverImage from "../assets/spinestopside.webp";
import ceramicImage from "../assets/axisfull.webp";

const services = [
  {
    title: "Max G+ SystemX Ceramic Coating",
    description: [
      "Lifetime Warranty",
      "High gloss , hydrophobic finish to repel water, dirt and road grime",
      "80 in/lb impact resistance , 9H Hardness",
      "Outstanding chemical and salt spray resistance , great for frequent automatic car wash usage",
      "Temp resistance up to 1400 deg F",
      "UV Protection to prevent fading and oxidation",
      "FREE windshield coating with purchase",
    ],
    image: maxImage,
  },
  {
    title: "Pro+ SystemX Ceramic Coating",
    description: [
      "6 year Warranty",
      "High gloss , hydrophobic finish to repel water, dirt and road grime",
      "80 in/lb impact resistance , 9H Hardness",
      "Excellent chemical and salt spray resistance , great for frequent automatic car wash usage",
      "Temp resistance up to 1400 deg F",
      "UV Protection to prevent fading and oxidation",
      "FREE windshield coating with purchase",
    ],
    image: proImage,
  },
  {
    title: "Crystal+ SystemX Ceramic Coating",
    description: [
      "3 Year Warranty",
      "High gloss , hydrophobic finish to repel water, dirt and road grime",
      "no impact resistance , 9H Hardness",
      "Very good chemical and salt spray resistance , great for frequent automatic car wash usage",
      "Temp resistance up to 1000 deg F",
      "UV Protection to prevent fading and oxidation",
    ],
    image: crystalImage,
  },
  {
    title: "Glass+ SystemX Ceramic Coating",
    description: [
      "2 Year Effectiveness",
      "Protects windshield, windows, mirrors and glass surfaces from microscratches",
      "Enhanced hydrophobic while maintaining invisibility",
      "Dramatically enhanced visibility in the rain",
      "Easy de-icing in winter and removal of insect splatter in the summer",
    ],
    image: glassImage,
  },
  {
    title: "Interior Textile SystemX Ceramic Coating",
    description: [
      "2 Year Effectiveness",
      "Protection for all of your interior surfaces including fabric seats and carpets",
      "Hydrophobic to make spills clean up easily and quickly",
      "Stain resistance",
      "Good chemical resistance",
    ],
    image: interiorImage,
  },
  {
    title: "Leather, Vinyl & Plastic SystemX Ceramic Coating",
    description: [
      "3 Year Warranty",
      "Clear natural look for your interior surfaces",
      "Outstanding chemical resistance",
      "Temp resistance up to 500 degrees",
      "Impact resistance up to 80 in/lb",
    ],
    image: maxImage,
  },
  {
    title: "Wheel SystemX Ceramic Coating",
    description: [
      "3 Year Warranty",
      "Outstanding chemcial and salt resistance to protect against road grime and brake dust",
      "High gloss and hydrophobic",
      "80 in/lb impact resistanct",
      "Temp resistance up to 1400 degrees",
      "UV protection against fading and oxidation",
    ],
    image: wheelCoating,
  },
  {
    title: "Spray Ceramic Coating",
    description: [
      "6-9 month effectiveness depending on environmental factors",
      "High glood, hydrophob qualities",
      "Can be used alone or as a booster to your true ceramic coating",
    ],
    image: sprayImage,
  },
  {
    title: "Xtreme SS Boat SystemX Cermaic Coating",
    description: [
      "2 year effectiveness",
      "Best performance against friction, heat and solvents found while on the water",
      "Extreme gloss finish will not yellow, crack peel or delaminate",
      "80 in/lb impact resistance, 9H hardness",
      "Very good chemical and salt resistance",
      "Temp resistance up to 1000 degrees",
      "UV protection against fading and oxidation",
    ],
    image: boatImage,
  },
  {
    title: "Revive Plastics SystemX Ceramic Coating",
    description: [
      "2 Year Effectivness",
      "High gloss, deep black look",
      "Rejuvinates plastics and trims to factory appearance",
      "Protects against future UV damage",
      "Ultra Hydrophobic",
      "Very good chemcial resistance",
    ],
    image: reviveImage,
  },
  {
    title: "Nanoflex Ceramic Window Tint",
    description: [
      "Lifetime Warranty",
      "Premium ceramic offering maximal heat rejection for a cooler cab ",
      "Superior infrared heat rejection blocking up to 98% of what your body registers as heat",
      "Blocks 99% of UV rays protecting you and your ride from the suns damaging rays",
      "Rich black color",
      "Advanced clarity from the inside, no matter the darkness",
    ],
    image: nanoImage,
  },
  {
    title: "Panaflex Ceramic Window Tint",
    description: [
      "Lifetime Warranty",
      "Entry level ceramic offering optimal heat rejection for a cooler cab ",
      "Superior infrared heat rejection blocking up to 89% of what your body registers as heat",
      "Blocks 99% of UV rays protecting you and your ride from the suns damaging rays",
      "Rich black color",
      "Excellent clarity from the inside, no matter the darkness",
    ],
    image: panaImage,
  },
  {
    title: "Terraflex Carbon Window Tint",
    description: [
      "Lifetime Warranty",
      "Workhorse carbon film offering excellent heat rejection for a cooler cab",
      "Excellent inrared heat rejection blocking up to 67% of what your body registers as heat",
      "Blocks 99% of UV rays protecting you and your ride from the suns damaging rays",
      "Rich black color",
      "Good clarity from the inside, slightly more difficult to see out in darker percentages",
    ],
    image: terraImage,
  },
  {
    title: "DualFlex Solar Control Window Tint",
    description: [
      "Metalized exterior layer to reflect sun and heat away for a cooler room",
      "Mirrored look with neutral grey appearance for great daytime clarity",
      "Available in a wide range of darknesses",
      "Safe for most windows",
      "The most popular architectural window tint for daytime privacy",
      "Provides no nightime privacy, when the lighting is reversed, the film works in reverse",
    ],
    image: dualImage,
  },
  {
    title: "Chromoflex Solar Control Window Tint",
    description: [
      "Metalized exterior and interior layer to reflect sun and heat away for a cooler room",
      "One way mirrored look with neutral grey appearance for great daytime clarity",
      "Safe for most windows",
      "Excellent glare reduction",
      "The most popular commercial architectural window tint for daytime privacy",
      "Provides no nightime privacy, when the lighting is reversed, the film works in reverse",
    ],
    image: silverImage,
  },
  {
    title: "Panaflex Solar Control Window Tint",
    description: [
      "No metalized layer for reflection, sun and heat absorbed in the film for a cooler room",
      "Rich black appearance for maximal clarity and neutral look",
      "Available in light percentages",
      "Safe for some windows",
      "The most popular nonreflective architectural tint",
      "Provides no nightime privacy, when the lighting is reversed, the film works in reverse",
    ],
    image: ceramicImage,
  },
];

export default services;
