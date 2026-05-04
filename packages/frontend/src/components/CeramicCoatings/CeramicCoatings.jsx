import {
  ShieldCheck,
  Award,
  Car,
  Factory,
  CheckCircle,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import ceramicGalleryItems from "./ceramicGalleryData";
import "./CeramicCoatings.css";

import SystemX from "../../assets/SystemX.webp";

const credentials = [
  {
    icon: <ShieldCheck size={32} />,
    title: "Certified SystemX Installer",
    body: "Downey Auto Spa is an authorized, certified SystemX installation center. Your coating is applied by trained hands using the right product, the right prep, and the right process.",
  },
  {
    icon: <Award size={32} />,
    title: "Manufacturer-Backed Warranty",
    body: "Your protection comes with a real warranty through SystemX — not just our word. Terms vary by package. We walk you through exactly what's covered before you book.",
  },
  {
    icon: <Car size={32} />,
    title: "CARFAX Registered",
    body: "Max+ , Pro+ & Crystal+ installations are automatically registered with CARFAX. Your protection follows the vehicle — and shows up when it's time to sell.",
  },
  {
    icon: <Factory size={32} />,
    title: "Made in the USA",
    body: "SystemX coatings are manufactured in Plainville, CT. Independently tested by SGS laboratory for hardness, chemical resistance, and safety. Not a rebadged import — a product with a proven track record.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Paint Inspection",
    body: "Before anything else, we assess your paint condition. We're looking for swirl marks, oxidation, scratches, or anything that needs to be corrected before the coating goes on. A coating locks in whatever is under it — so we make sure what's under it is right.",
  },
  {
    num: "02",
    title: "Decontamination Wash",
    body: "A thorough multi-stage wash that removes bonded contaminants a regular wash won't touch — iron deposits, tar, road grime. Your paint needs to be truly clean before the coating bonds.",
  },
  {
    num: "03",
    title: "Paint Correction (if needed)",
    body: "If the inspection shows swirl marks, scratches, or oxidation, we correct it before coating. This is an add-on step, not always required — we'll tell you upfront if it's needed and what it adds to your quote.",
  },
  {
    num: "04",
    title: "Coating Application",
    body: "The SystemX coating is applied panel by panel, by hand, in a controlled environment. This is where the molecular bond happens.",
  },
  {
    num: "05",
    title: "Cure & Inspection",
    body: "The coating needs time to cure before it's exposed to water. We'll give you a clear timeline for when you can drive it, when you can wash it, and what to expect in the first few days.",
  },
];

const faqs = [
  {
    q: "Is ceramic coating worth it on a daily driver?",
    a: "Yes — especially if your vehicle parks outside, sees automatic car washes, or lives in a climate with harsh summers or road salt winters. Daily drivers take the most abuse, which is exactly where the protection matters most.",
  },
  {
    q: "Does my car need paint correction before coating?",
    a: "It depends on your paint's current condition. If there are visible swirl marks, scratches, or oxidation, those need to be corrected first — a coating will lock them in permanently. If your paint is in good shape, you may not need it. We'll tell you honestly at inspection.",
  },
  {
    q: "How do I wash it after?",
    a: "Hand wash with a pH-neutral soap is always best. Wash top to bottom, dry with a quality microfiber or blow dry, and avoid brush-style automatic car washes. Touchless washes are acceptable when hand washing isn't an option.",
  },
  {
    q: "How long does the process take?",
    a: "Most installs require 1 day. Add a day if paint correction is needed. We'll give you an accurate timeline when you book.",
  },
  {
    q: "What's the difference between Pro+ and Max G+?",
    a: "Both are professional-grade SystemX coatings. Max G+ is thicker, glossier, and carries a lifetime warranty. Pro+ is a 6-year warranty and the right fit for most vehicles. Not sure which makes sense for yours? Get a quote and we'll sort it out.",
  },
  {
    q: "Can it go on a brand new car?",
    a: "That's actually the ideal time. Coating a new vehicle before it's had any exposure to the elements means your factory finish is protected from day one.",
  },
  {
    q: "Is a deposit required?",
    a: "Yes, we require a 50% deposit at booking, with the balance due at completion. We accept cash, check, Venmo (@downeyauto), Apple Pay (270-776-3914), and major credit cards (3% convenience fee applies to card payments).",
  },
];

function CeramicCoatings({ handleQuoteButtonClick }) {
  return (
    <div className="ceramic">
      {/* SECTION 1 — HERO */}
      <section className="ceramic__hero">
        <video className="ceramic__hero-video" autoPlay muted loop playsInline>
          <source src="/videos/ceramicCoating_hero.mp4" type="video/mp4" />
        </video>
        <div className="ceramic__hero-overlay" />
        <div className="ceramic__hero-content">
          <img
            className="ceramic__hero-logo"
            src={SystemX}
            alt="SystemX Certified Installer"
          />
          <h1 className="ceramic__hero-headline">
            Your paint won't protect itself.
          </h1>
          <p className="ceramic__hero-sub">
            Certified SystemX ceramic coating, applied by South Central
            Kentucky's trusted detailing experts.
          </p>
          <p className="ceramic__hero-body">
            One professional application. A molecular bond that wax can't
            replicate. Years of protection instead of months.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            <a className="ceramic__cta-btn ceramic__cta-btn--secondary" href="#ceramic-gallery">
              See Our Work →
            </a>
            <a
              className="ceramic__cta-btn"
              href="https://book.downeyautospa.com/downey-auto-spa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
            <button
              className="ceramic__cta-btn ceramic__cta-btn--secondary"
              onClick={() => handleQuoteButtonClick("ceramic_hero")}
            >
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE PROBLEM */}
      <section className="ceramic__section ceramic__section--dark">
        <div className="ceramic__container">
          <h2 className="ceramic__section-heading">
            Your paint is under attack every single day.
          </h2>
          <p className="ceramic__body-text">
            Every time you drive, your vehicle's finish takes hits you can't
            always see. UV rays break down your clear coat and fade your color
            over time. Bird droppings and acid rain etch into the surface in
            hours if you don't catch them. Road grime, tree sap, bug splatter,
            and hard water minerals slowly dull the finish you paid good money
            for.
          </p>
          <p className="ceramic__body-text">
            Waxes and sealents help — for a while. But they sit on top of your
            paint. It wears off in weeks or months. It can't hold up to what the
            road actually throws at you, and it can't stop the slow damage that
            happens between washes.
          </p>
          <p className="ceramic__body-text ceramic__body-text--accent">
            Ceramic coating is a different category entirely.
          </p>
        </div>
      </section>

      {/* SECTION 3 — HOW IT WORKS */}
      <section className="ceramic__section ceramic__section--mid">
        <div className="ceramic__container">
          <h2 className="ceramic__section-heading">
            Think of it as a second clear coat — one that's stronger than the
            original.
          </h2>
          <p className="ceramic__body-text">
            SystemX ceramic coating bonds to your paint at a molecular level. It
            doesn't sit on top and wear away. It becomes part of the surface.
            The result is a glass-like protective layer that's harder, glossier,
            and more chemical-resistant than your factory clear coat.
          </p>
          <p className="ceramic__body-text">
            Water beads up and rolls off, taking dirt and contaminants with it.
            Bird droppings and road grime can't grip the surface. UV rays hit
            the coating, not the paint underneath. And because the surface stays
            cleaner longer, your wash routine gets easier and your paint stays
            sharper between washes.
          </p>
          <p className="ceramic__body-text">
            This is why ceramic coating has replaced waxing for serious car
            owners — and why it's the only exterior paint protection we
            recommend for vehicles that matter to you.
          </p>
        </div>
      </section>

      {/* SECTION 4 — CREDENTIALS */}
      <section className="ceramic__section ceramic__section--dark">
        <div className="ceramic__container">
          <h2 className="ceramic__section-heading">
            We're certified. That matters more than you might think.
          </h2>
          <p className="ceramic__body-text">
            Anyone can say they apply ceramic coating. Not everyone can say
            they're a certified SystemX installer with the training, prep
            standards, and product knowledge to back it up.
          </p>
          <div className="ceramic__credential-grid">
            {credentials.map((c) => (
              <div key={c.title} className="ceramic__credential-tile">
                <div className="ceramic__credential-icon">{c.icon}</div>
                <h3 className="ceramic__credential-title">{c.title}</h3>
                <p className="ceramic__credential-body">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — PACKAGES */}
      <section className="ceramic__section ceramic__section--mid">
        <div className="ceramic__container">
          <h2 className="ceramic__section-heading">
            Find the right protection for your vehicle.
          </h2>
          <p className="ceramic__body-text">
            Not sure which package is right for you? Check out the information
            below or as always, give us a call and one of our certified
            installers can walk you through whats right for you!
          </p>

          {/* Main 3 tiers */}
          <div className="ceramic__package-grid">
            <div className="ceramic__package-card ceramic__package-card--premium">
              <div className="ceramic__package-badge">Lifetime</div>
              <h3 className="ceramic__package-name">MAX G+™</h3>
              <p className="ceramic__package-tagline">
                New vehicles. Show vehicles. Daily drivers you want maximum
                protection on.
              </p>
              <p className="ceramic__package-body">
                The flagship SystemX package. Max G+ is the highest-gloss, most
                durable coating in the lineup — up to four times thicker and
                significantly stronger than earlier ceramic formulas. If you're
                investing in paint protection and want to do it once, this is
                it.
              </p>
              <ul className="ceramic__package-features">
                <li>
                  <CheckCircle size={15} /> Lifetime warranty
                </li>
                <li>
                  <CheckCircle size={15} /> Deepest gloss in the SystemX line
                </li>
                <li>
                  <CheckCircle size={15} /> Outstanding chemical & salt
                  resistance
                </li>
                <li>
                  <CheckCircle size={15} /> Impact resistance up to 80/80 in/lbs
                </li>
                <li>
                  <CheckCircle size={15} /> Boeing-approved, SGS laboratory
                  certified
                </li>
                <li>
                  <CheckCircle size={15} /> CARFAX registered
                </li>
              </ul>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "auto" }}>
                <a
                  className="ceramic__cta-btn ceramic__cta-btn--card"
                  href="https://book.downeyautospa.com/downey-auto-spa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </a>
                <button
                  className="ceramic__cta-btn ceramic__cta-btn--card ceramic__cta-btn--secondary"
                  onClick={() => handleQuoteButtonClick("package_max_g")}
                >
                  Get a Quote
                </button>
              </div>
            </div>

            <div className="ceramic__package-card ceramic__package-card--popular">
              <div className="ceramic__package-badge ceramic__package-badge--popular">
                Most Popular
              </div>
              <h3 className="ceramic__package-name">PRO+™</h3>
              <p className="ceramic__package-tagline">
                The package most of our customers choose. Proven. Warranted.
                Independently tested.
              </p>
              <p className="ceramic__package-body">
                Pro+ is a 9H hardness coating with a 6-year warranty,
                independently tested by SGS laboratory, and Boeing-approved for
                hardness and chemical resistance. That's third-party credibility
                most coatings on the market can't point to.
              </p>
              <ul className="ceramic__package-features">
                <li>
                  <CheckCircle size={15} /> 6-year warranty
                </li>
                <li>
                  <CheckCircle size={15} /> Exceptional gloss finish
                </li>
                <li>
                  <CheckCircle size={15} /> Boeing-approved, SGS laboratory
                  certified
                </li>
                <li>
                  <CheckCircle size={15} /> Impact resistance up to 80/80 in/lbs
                </li>
                <li>
                  <CheckCircle size={15} /> CARFAX registered
                </li>
              </ul>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "auto" }}>
                <a
                  className="ceramic__cta-btn ceramic__cta-btn--card"
                  href="https://book.downeyautospa.com/downey-auto-spa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </a>
                <button
                  className="ceramic__cta-btn ceramic__cta-btn--card ceramic__cta-btn--secondary"
                  onClick={() => handleQuoteButtonClick("package_pro_plus")}
                >
                  Get a Quote
                </button>
              </div>
            </div>

            <div className="ceramic__package-card">
              <div className="ceramic__package-badge">Entry Ceramic</div>
              <h3 className="ceramic__package-name">CRYSTAL+™</h3>
              <p className="ceramic__package-tagline">
                Essentials coating. Budget-conscious. Still want real ceramic
                protection.
              </p>
              <p className="ceramic__package-body">
                Crystal+ is an intro ceramic coating. It bonds the same way the
                premium packages do, delivers the hydrophobic self-cleaning
                surface, and comes with a 2-year warranty. A smart starting
                point.
              </p>
              <ul className="ceramic__package-features">
                <li>
                  <CheckCircle size={15} /> 2-year warranty
                </li>
                <li>
                  <CheckCircle size={15} /> High gloss, semi-permanent
                </li>
                <li>
                  <CheckCircle size={15} /> Boeing-approved, SGS laboratory
                  certified
                </li>
                <li>
                  <CheckCircle size={15} /> CARFAX registered
                </li>
              </ul>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "auto" }}>
                <a
                  className="ceramic__cta-btn ceramic__cta-btn--card"
                  href="https://book.downeyautospa.com/downey-auto-spa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </a>
                <button
                  className="ceramic__cta-btn ceramic__cta-btn--card ceramic__cta-btn--secondary"
                  onClick={() => handleQuoteButtonClick("package_crystal")}
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </div>

          {/* Wheel, Glass & Exterior Add-ons */}
          <h3 className="ceramic__subheading">Exterior Add-Ons</h3>
          <div className="ceramic__addon-grid">
            <div className="ceramic__addon-card">
              <h4 className="ceramic__addon-name">Wheel Coating</h4>
              <p className="ceramic__addon-body">
                Wheels take punishment that the rest of your vehicle doesn't —
                brake dust, road salt, and heat cycles every single drive.
                SystemX wheel coating bonds to painted, polished, and
                powder-coated surfaces, making cleanup effortless and protecting
                your finish from the worst of it.
              </p>
            </div>
            <div className="ceramic__addon-card">
              <h4 className="ceramic__addon-name">
                Windshield &amp; Glass Coating
                <span className="ceramic__addon-badge">
                  Complimentary with Max G+™ &amp; Pro+™
                </span>
              </h4>
              <p className="ceramic__addon-body">
                Glass coating creates a hydrophobic layer that sends rain
                sheeting off your windshield at speed — dramatically improving
                visibility in wet conditions. Bugs and road grime wipe off
                instead of bonding to the glass. Included at no extra charge
                with every Max G+ and Pro+ package.
              </p>
            </div>
            <div className="ceramic__addon-card">
              <h4 className="ceramic__addon-name">
                Revive™ — Exterior Trim &amp; Plastic
              </h4>
              <p className="ceramic__addon-body">
                Faded black trim, unpainted plastic, and rubber surfaces age
                fast without protection. Revive restores deep color and applies
                a ceramic-grade barrier that keeps trim looking sharp.
                Long-lasting and low maintenance.
              </p>
            </div>
          </div>

          {/* Add-ons */}
          <h3 className="ceramic__subheading">Interior Coatings</h3>
          <div className="ceramic__addon-grid">
            <div className="ceramic__addon-card">
              <h4 className="ceramic__addon-name">
                LVP™ — Leather, Vinyl &amp; Plastic
              </h4>
              <p className="ceramic__addon-body">
                The inside of your vehicle takes the same daily abuse as the
                outside. LVP ceramic coating protects leather, vinyl, and
                plastic surfaces with the same nanotechnology as your exterior
                coating. Spills wipe up. Stains don't set. 3-year warranty.
              </p>
            </div>
            <div className="ceramic__addon-card">
              <h4 className="ceramic__addon-name">
                Textile™ — Fabric Seats &amp; Carpet
              </h4>
              <p className="ceramic__addon-body">
                Single-application protection for fabric seats and carpet.
                Spills clean up easily without changing the look or feel of the
                fabric. Safe, low-odor, professionally applied.
              </p>
            </div>
          </div>

          <h3 className="ceramic__subheading">
            RENEW™ — Spray Ceramic Maintenance
          </h3>
          <div className="ceramic__renew-block">
            <div className="ceramic__renew-col">
              <p className="ceramic__renew-label">If you're still waxing:</p>
              <p className="ceramic__addon-body">
                Renew is a meaningful upgrade over carnauba wax. It's a true
                spray ceramic — not a sealant — that gives you hydrophobic
                protection and real gloss enhancement lasting up to 9 months per
                application. Ask about it at your next detail appointment.
              </p>
            </div>
            <div className="ceramic__renew-col">
              <p className="ceramic__renew-label">If you're already coated:</p>
              <p className="ceramic__addon-body">
                Renew is your maintenance layer. Applied at regular detail
                visits, it keeps your Pro+ or Max G+ coating performing at its
                best and extends the life of your investment between annual
                inspections.
              </p>
            </div>
          </div>

          <div className="ceramic__marine-block">
            <h3 className="ceramic__subheading">Marine &amp; Industrial</h3>
            <p className="ceramic__addon-body">
              SystemX protection isn't just for cars. We offer ceramic coating
              for boats, watercraft, and commercial or industrial applications.
              If you have something that needs protection outside the typical
              automotive package, give us a call and we'll figure out what makes
              sense.
            </p>
            <a className="ceramic__phone-link" href="tel:2707763914">
              <Phone size={16} /> 270-776-3914
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY — Our Work */}
      <section id="ceramic-gallery" className="ceramic__section ceramic__section--dark">
        <div className="ceramic__container">
          <h2 className="ceramic__section-heading">See Our Work</h2>
        </div>
        <div className="ceramic__gallery-wrap">
          <PhotoGallery items={ceramicGalleryItems} sectionName="ceramic_gallery" />
        </div>
      </section>

      {/* SECTION 6 — THE PROCESS */}
      <section className="ceramic__section ceramic__section--mid">
        <div className="ceramic__container">
          <h2 className="ceramic__section-heading">
            Here's what to expect when you bring your vehicle in.
          </h2>
          <p className="ceramic__body-text">
            Ceramic coating isn't something you rush. The prep work is what
            makes the coating perform — and perform for years, not months.
          </p>
          <p className="ceramic__body-text ceramic__body-text--note">
            Typical turnaround: 1–2 days depending on vehicle size and whether
            paint correction is included.
          </p>
          <div className="ceramic__process-list">
            {processSteps.map((step) => (
              <div key={step.num} className="ceramic__process-step">
                <div className="ceramic__process-num">{step.num}</div>
                <div className="ceramic__process-content">
                  <h3 className="ceramic__process-title">{step.title}</h3>
                  <p className="ceramic__process-body">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — QUOTE CTA */}
      <section className="ceramic__section ceramic__quote-cta-section">
        <div className="ceramic__container ceramic__container--center">
          <h2 className="ceramic__section-heading">
            Not sure which package is right for your vehicle?
          </h2>
          <p className="ceramic__hero-sub">
            Tell us about your vehicle and what you're looking to protect. We'll
            put together the right recommendation.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            <a className="ceramic__cta-btn ceramic__cta-btn--large ceramic__cta-btn--secondary" href="#ceramic-gallery">
              See Our Work →
            </a>
            <a
              className="ceramic__cta-btn ceramic__cta-btn--large"
              href="https://book.downeyautospa.com/downey-auto-spa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
            <button
              className="ceramic__cta-btn ceramic__cta-btn--large ceramic__cta-btn--secondary"
              onClick={() => handleQuoteButtonClick("ceramic_mid_cta")}
            >
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 8 — FAQ */}
      <section className="ceramic__section ceramic__section--dark">
        <div className="ceramic__container">
          <h2 className="ceramic__section-heading">Common Questions</h2>
          <div className="ceramic__faq-list">
            {faqs.map((item) => (
              <div key={item.q} className="ceramic__faq-item">
                <h3 className="ceramic__faq-q">{item.q}</h3>
                <p className="ceramic__faq-a">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <section className="ceramic__section ceramic__final-cta-section">
        <div className="ceramic__container ceramic__container--center">
          <h2 className="ceramic__section-heading">
            Ready to protect your investment?
          </h2>
          <p className="ceramic__hero-sub">
            We're a family-owned shop in Franklin, KY. We answer our own phones,
            we do our own work, and we stand behind every coating we apply.
          </p>
          <div className="ceramic__contact-block">
            <a className="ceramic__contact-line" href="tel:2707763914">
              <Phone size={16} /> 270-776-3914
            </a>
            <span className="ceramic__contact-line">
              <MapPin size={16} /> 104 State Street, Unit 3, Franklin, KY 42134
            </span>
            <span className="ceramic__contact-line">
              <Clock size={16} /> Mon–Fri 8am–4:30pm &nbsp;|&nbsp; Sat 5am–9am
            </span>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            <a
              className="ceramic__cta-btn ceramic__cta-btn--large"
              href="https://book.downeyautospa.com/downey-auto-spa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
            <button
              className="ceramic__cta-btn ceramic__cta-btn--large ceramic__cta-btn--secondary"
              onClick={() => handleQuoteButtonClick("ceramic_final_cta")}
            >
              Get a Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CeramicCoatings;
