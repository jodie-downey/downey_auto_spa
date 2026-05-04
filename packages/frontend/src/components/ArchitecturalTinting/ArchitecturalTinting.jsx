import {
  CheckCircle,
  Phone,
  MapPin,
  Clock,
  AlertTriangle,
  ClipboardCheck,
} from "lucide-react";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import archGalleryItems from "./archGalleryData";
import "./ArchitecturalTinting.css";

import heroImage from "../../assets/onlyDaughter.webp";

// reflectivity: 1–5 scale (5 = full mirror, 1 = clear)
const filmCards = [
  {
    id: "silver",
    name: "Silver Reflective",
    brand: "Chromoflex",
    category: "solar",
    categoryLabel: "Solar Control",
    reflectivity: 5,
    reflectivityLabel: "Mirror",
    tagline: "The maximum-performance mirror film.",
    body: "Silver reflective is the highest-performing solar control film in the lineup. It works by reflecting solar energy before it can transmit through the glass — the darker and shinier, the more it rejects. From the outside, it presents a mirror-like appearance. From the inside during the day, you maintain a clear outward view.",
    specs: [
      "Highest solar heat rejection in the lineup",
      "Exceptional IR heat rejection",
      "High glare reduction",
      "99%+ UV protection",
      "One-way daytime privacy — you see out, they don't see in",
    ],
    bestFor:
      "South or west-facing windows with intense direct sun. Commercial storefronts that need maximum heat control. Spaces where the mirror exterior appearance is acceptable or preferred.",
    safetyNote:
      "Silver reflective reflects rather than absorbs solar energy, which is generally safer on most glass types than absorptive films. However, avoid applying to glass that receives partial shade throughout the day — uneven heating of shaded vs. exposed areas can create thermal stress on some glass types. We assess every installation before recommending this film.",
    privacyNote:
      "One-way privacy is a daytime phenomenon. At night, when interior lights are on and it's dark outside, the effect reverses — people outside can see in.",
  },
  {
    id: "dual",
    name: "Dual Reflective",
    brand: "DualFlex",
    category: "solar",
    categoryLabel: "Solar Control",
    reflectivity: 4,
    reflectivityLabel: "Semi-mirror",
    tagline:
      "The most popular architectural film. Mirror outside, clear inside.",
    body: "DualFlex is the industry's bestselling architectural film for good reason. The outer layer is a reflective metallic aluminum that bounces solar energy away before it enters the glass. The inner layer is carbon — which delivers high visibility from inside while absorbing any remaining solar energy. Strong solar performance from outside, feels more natural from inside.",
    specs: [
      "High solar heat rejection via outer reflective layer",
      "Cleaner interior view than single-layer reflective films",
      "Carbon inner layer — no fade, no color change",
      "99%+ UV protection",
      "One-way daytime privacy",
      "Compatible with most glass types",
    ],
    bestFor:
      "Homes and businesses that want strong solar performance and good daytime privacy without the full mirror look of silver reflective. The go-to choice for most residential and commercial installs.",
    safetyNote:
      "DualFlex is one of the most glass-compatible films in the lineup due to its reflective outer layer — it rejects rather than absorbs heat, which reduces thermal stress on the glass. Suitable for most standard single and double-pane applications.",
    privacyNote:
      "One-way privacy is a daytime phenomenon. At night, when interior lights are on and it's dark outside, the effect reverses — people outside can see in.",
  },
  {
    id: "ceramic",
    name: "Black Ceramic",
    brand: "Panashield",
    category: "solar",
    categoryLabel: "Solar Control",
    reflectivity: 1,
    reflectivityLabel: "Non-reflective",
    tagline: "No mirror look. Maximum comfort.",
    body: "Panashield is the architectural version of our Ceramic Panaflex automotive film — the same ceramic technology applied to flat glass. Where reflective films reject heat by bouncing it away, ceramic films absorb solar energy and slow its transfer into the space. A clean, non-reflective appearance that delivers powerful heat control without the mirror exterior.",
    specs: [
      "Up to 89% IR heat rejection",
      "99%+ UV protection",
      "Low-reflectivity exterior — subtle, modern appearance",
      "High light transmission options available",
      "Excellent for aesthetics-sensitive applications",
    ],
    bestFor:
      "Homes or offices where the mirror look isn't desirable. HOA environments where reflective film may not be permitted. Storefronts that want heat control without a mirror exterior.",
    safetyNote:
      "Because ceramic film absorbs rather than reflects solar energy, heat is held in the film itself — which can increase thermal stress on the glass, particularly double-pane or low-E glass. Think of it like a black shirt on a hot day: exceptional performance, but more thermal load on the glass. This film requires careful glass assessment before installation. We will not install Panashield on glass types that aren't rated for the thermal load. If your glass is compatible, it's an outstanding choice. If it's not, we'll recommend DualFlex instead.",
    privacyNote: null,
  },
  {
    id: "safety",
    name: "Safety Film",
    brand: "Safetyflex",
    category: "safety",
    categoryLabel: "Safety & Security",
    reflectivity: 1,
    reflectivityLabel: "Clear",
    tagline: "Protection you can't see. The film that holds glass together.",
    body: "Safetyflex is virtually clear — you won't know it's there from looking at it. What it does is hold glass together in the event of breakage. Whether from a break-in attempt, severe weather, an accident, or an impact, Safetyflex keeps shattered glass bonded to the film rather than scattering as dangerous fragments.",
    specs: [
      "Virtually clear — no visible tint effect",
      "Holds glass fragments together on impact",
      "UV protection",
      "Compatible with most glass types",
      "Does not significantly alter appearance or light levels",
    ],
    bestFor:
      "Ground-floor commercial windows. Entry doors with glass panels. Schools, daycares, medical offices, or any space where glass breakage creates a safety hazard. Homeowners in storm-prone areas.",
    safetyNote:
      "Safety film does not make glass unbreakable. It significantly reduces the hazard of broken glass and increases the time and effort required to breach a window — which is often enough to deter a break-in attempt.",
    privacyNote: null,
  },
  {
    id: "frost",
    name: "Decorative Frost",
    brand: null,
    category: "privacy",
    categoryLabel: "Privacy & Decorative",
    reflectivity: 0,
    reflectivityLabel: "Frosted",
    tagline: "Privacy without darkness. Style without sacrifice.",
    body: "Decorative frost creates a translucent, frosted-glass appearance on any window or glass panel. It diffuses light rather than blocking it — the space stays bright while the view is obscured. Available in white frost, white out, and black out depending on how much privacy and light control you need.",
    specs: null,
    frostOptions: [
      {
        name: "White Frost",
        body: "The classic frosted glass look. Translucent, diffuses daylight, soft-white appearance. Great for office partitions, conference room glass, bathroom windows, or any space where privacy is needed without losing natural light.",
      },
      {
        name: "White Out",
        body: "More opaque than frost. Creates strong privacy and diffuses light significantly. For areas where complete privacy matters but a blackout isn't needed.",
      },
      {
        name: "Black Out",
        body: "Complete privacy. Total light block. No view in either direction. For spaces that need full coverage — server rooms, storage areas, or any window that simply needs to be blocked entirely.",
      },
    ],
    bestFor:
      "Office conference rooms and private offices. Bathroom or bedroom windows. Retail display areas. Also popular as a branding element — custom patterns can be cut from frost film for logos, signage, or decorative treatments on glass.",
    safetyNote: null,
    privacyNote: null,
  },
];

const directionTiles = [
  {
    compass: "South & West",
    body: "Gets the most direct sun. Maximum solar load. Any solar control film is appropriate — this is where reflective films deliver the highest return.",
  },
  {
    compass: "East",
    body: "Morning sun only. Moderate solar exposure. Most films perform well. Less critical than south/west-facing glass.",
  },
  {
    compass: "North",
    body: "Rarely receives direct sun. Solar control film is usually unnecessary. Privacy, decorative, or safety films are more relevant here.",
  },
  {
    compass: "Mixed or Partial Shade",
    body: "The most important exposure to get right. Uneven heating from partial shade creates thermal stress on some glass types. We ask the most questions on these installs.",
  },
];

const faqs = [
  {
    q: "Do I need to replace my glass to get window film?",
    a: "No. Film is applied directly to your existing glass. That's the point — you get most of the performance benefit of upgraded glass at a fraction of the cost and with none of the disruption of a glass replacement project.",
  },
  {
    q: "Can film go on double-pane windows?",
    a: "It depends on the film. Reflective films (Silver, DualFlex) are generally compatible with most double-pane glass. Absorptive ceramic films require more careful assessment on double-pane units because of the additional thermal load. We assess every job before recommending a film — this is not something we skip.",
  },
  {
    q: "How long does architectural film last?",
    a: "Properly installed architectural film typically carries warranties up to 15 years. Longevity depends on film type, glass type, and sun exposure. We'll walk you through the warranty specifics for whatever film we install.",
  },
  {
    q: "Is frosted film the same as frosted glass?",
    a: "Visually very similar. The main difference is that film is reversible — it can be removed if you ever want to change it. Acid-etched frosted glass is permanent. Film also typically costs significantly less than replacing glass with frosted panes.",
  },
  {
    q: "Will film affect my HOA approval?",
    a: "Some HOAs have restrictions on exterior appearances. Reflective silver film is the most likely to attract HOA scrutiny. DualFlex and Panashield have a more subtle exterior appearance and are often acceptable where pure mirror film isn't. We recommend checking your HOA guidelines before booking — and we can tell you what each film looks like from the outside during your site assessment.",
  },
  {
    q: "Can you do custom patterns or logos in frost film?",
    a: "Yes. We can cut custom patterns, logos, or decorative designs from frost film for glass panels, office partitions, or storefronts. Call us to discuss your project: 270-776-3914.",
  },
  {
    q: "How do I get a quote?",
    a: "Architectural jobs require a site visit before we can give you an accurate quote — every project is different in terms of square footage, glass type, and film selection. Call us at 270-776-3914 and we'll schedule a time to come out and assess the space.",
  },
];

function ReflectivityPips({ reflectivity, label }) {
  if (reflectivity === 0) {
    return (
      <div className="arch-tint__reflectivity">
        <span className="arch-tint__reflectivity-label">Exterior look:</span>
        <span className="arch-tint__reflectivity-text">{label}</span>
      </div>
    );
  }
  return (
    <div className="arch-tint__reflectivity">
      <span className="arch-tint__reflectivity-label">Exterior look:</span>
      <div className="arch-tint__reflectivity-pips">
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`arch-tint__pip${i <= reflectivity ? " arch-tint__pip--filled" : ""}`}
          />
        ))}
      </div>
      <span className="arch-tint__reflectivity-text">{label}</span>
    </div>
  );
}

function ArchitecturalTinting() {
  return (
    <div className="arch-tint">
      {/* SECTION 1 — HERO */}
      <section
        className="arch-tint__hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="arch-tint__hero-overlay" />
        <div className="arch-tint__hero-content">
          <h1 className="arch-tint__hero-headline">
            Too much heat. Too much glare.
            <br />
            Too much of your business on display.
          </h1>
          <p className="arch-tint__hero-sub">
            Professional architectural window film for homes, offices, and
            commercial spaces across South Central Kentucky and Middle
            Tennessee.
          </p>
          <p className="arch-tint__hero-body">
            Window film is the most cost-effective upgrade you can make to a
            building's glass. Lower energy bills. Cooler rooms. Protected
            interiors. More privacy — without blocking your view or replacing a
            single pane.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            <a className="arch-tint__cta-btn arch-tint__cta-btn--secondary" href="#arch-gallery">
              See Our Work →
            </a>
            <a
              className="arch-tint__cta-btn"
              href="https://www.book.downeyautospa.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
            <a className="arch-tint__cta-btn arch-tint__cta-btn--secondary" href="tel:2707763914">
              <Phone size={18} />
              Call for a Quote
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHY ARCHITECTURAL FILM */}
      <section className="arch-tint__section arch-tint__section--dark">
        <div className="arch-tint__container">
          <h2 className="arch-tint__section-heading">
            Your windows are working against you. Film fixes that.
          </h2>
          <p className="arch-tint__body-text">
            Every window in your home or building is a potential energy problem.
            South-facing windows in a Kentucky summer can raise room
            temperatures significantly, forcing your HVAC to work harder and
            your energy bills to climb. West-facing windows catch the brutal
            afternoon sun. Large storefronts turn your business into a fishbowl.
          </p>
          <p className="arch-tint__body-text">
            At the same time, replacing glass is expensive, disruptive, and
            often unnecessary. Window film solves the same problems — heat,
            glare, UV, privacy — at a fraction of the cost, applied directly to
            your existing glass.
          </p>
          <p className="arch-tint__body-text window-tint__body-text--accent">
            The result: cooler rooms in summer, retained warmth in winter,
            protected furniture and flooring, and a more comfortable,
            energy-efficient space. All without a renovation.
          </p>
        </div>
      </section>

      {/* SECTION 3 — FILM SELECTION GUIDE */}
      <section className="arch-tint__section arch-tint__section--mid">
        <div className="arch-tint__container">
          <h2 className="arch-tint__section-heading">
            The right film depends on what problem you're solving.
          </h2>
          <p className="arch-tint__body-text">
            Not every film works for every situation. Before we recommend
            anything, we think about three things: what you're trying to
            achieve, what your glass type can handle, and what the space needs
            to look and feel like. Here's a plain-language guide to everything
            we offer.
          </p>

          <div className="arch-tint__film-grid">
            {filmCards.map((film) => (
              <div key={film.id} className="arch-tint__film-card">
                <span
                  className={`arch-tint__category-badge arch-tint__category-badge--${film.category}`}
                >
                  {film.categoryLabel}
                </span>

                <div>
                  <h3 className="arch-tint__film-name">{film.name}</h3>
                  {film.brand && (
                    <p className="arch-tint__film-brand">{film.brand}</p>
                  )}
                </div>

                <ReflectivityPips
                  reflectivity={film.reflectivity}
                  label={film.reflectivityLabel}
                />

                <p className="arch-tint__film-tagline">{film.tagline}</p>
                <p className="arch-tint__film-body">{film.body}</p>

                {film.specs && (
                  <ul className="arch-tint__film-specs">
                    {film.specs.map((spec) => (
                      <li key={spec}>
                        <CheckCircle size={15} />
                        {spec}
                      </li>
                    ))}
                  </ul>
                )}

                {film.frostOptions && (
                  <div className="arch-tint__frost-options">
                    {film.frostOptions.map((opt) => (
                      <div key={opt.name}>
                        <p className="arch-tint__frost-option-name">
                          {opt.name}
                        </p>
                        <p className="arch-tint__frost-option-body">
                          {opt.body}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <p className="arch-tint__film-best-for">
                  <strong>Best for:</strong> {film.bestFor}
                </p>

                {film.safetyNote && (
                  <div className="arch-tint__safety-callout">
                    <p className="arch-tint__safety-callout-heading">
                      <AlertTriangle size={14} />
                      Glass Compatibility Note
                    </p>
                    <p className="arch-tint__safety-callout-body">
                      {film.safetyNote}
                    </p>
                  </div>
                )}

                {film.privacyNote && (
                  <div className="arch-tint__privacy-note">
                    <p className="arch-tint__privacy-note-heading">
                      One-way privacy reminder
                    </p>
                    <p className="arch-tint__privacy-note-body">
                      {film.privacyNote}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — DIRECTIONAL & GLASS SAFETY GUIDE */}
      <section className="arch-tint__section arch-tint__section--dark">
        <div className="arch-tint__container">
          <h2 className="arch-tint__section-heading">
            Before we recommend a film, we think about your glass. Here's why
            that matters.
          </h2>
          <p className="arch-tint__body-text">
            Most window film companies skip this conversation. We don't.
          </p>
          <p className="arch-tint__body-text">
            Not every film is safe on every glass type, and window orientation
            matters more than most people realize. Getting this wrong doesn't
            just underperform — it can cause glass stress, seal failure on
            double-pane units, or in rare cases, breakage.
          </p>
          <p className="arch-tint__body-text">
            <strong>The core principle:</strong> Reflective films (Silver, Dual
            Reflective) reject heat away from the glass. Absorptive films (Black
            Ceramic) hold heat in the film. Glass that can't handle the thermal
            load from an absorptive film will develop stress over time —
            especially double-pane, tempered, or low-E coated glass.
          </p>

          <h3 className="arch-tint__subheading">
            Window direction: what we're thinking about.
          </h3>
          <div className="arch-tint__direction-grid">
            {directionTiles.map((tile) => (
              <div key={tile.compass} className="arch-tint__direction-tile">
                <p className="arch-tint__direction-compass">{tile.compass}</p>
                <p className="arch-tint__direction-body">{tile.body}</p>
              </div>
            ))}
          </div>

          <h3 className="arch-tint__subheading">
            What we assess on every architectural job.
          </h3>
          <ul className="arch-tint__assessment-list">
            {[
              "Single pane vs. double pane",
              "Clear glass vs. tempered vs. low-E coated",
              "Window orientation (N/S/E/W sun exposure)",
              "Shading patterns throughout the day — partial shade creates uneven thermal stress",
              "Existing glass condition",
            ].map((item) => (
              <li key={item}>
                <ClipboardCheck size={17} />
                {item}
              </li>
            ))}
          </ul>

          <p className="arch-tint__body-text" style={{ marginTop: 32 }}>
            We do not recommend a film before seeing the space or gathering
            significant information from the property owner. That's not a sales
            tactic — it's how we make sure what we install actually performs the
            way you expect it to.
          </p>
        </div>
      </section>

      {/* SECTION 5 — ENERGY SAVINGS */}
      <section className="arch-tint__section arch-tint__section--mid">
        <div className="arch-tint__container">
          <h2 className="arch-tint__section-heading">
            This isn't just a comfort upgrade. It's an investment with a return.
          </h2>
          <p className="arch-tint__body-text">
            Heating and cooling is one of the largest operating costs in any
            building. Windows are where a significant portion of that energy is
            lost — solar heat gain in summer forces your AC to work harder, and
            heat loss through glass in winter does the same to your heating
            system.
          </p>
          <p className="arch-tint__body-text">
            Professional window film addresses both. By rejecting solar energy
            before it enters the glass, reflective and dual-reflective films
            reduce the cooling load on your HVAC system. In winter, the same
            film helps retain interior warmth. The result is a more stable
            interior temperature year-round — and lower utility bills.
          </p>
          <p className="arch-tint__body-text">
            For commercial properties, the math is often straightforward: a
            building with significant south or west-facing glass exposure can
            see measurable reductions in cooling costs after film installation.
            For homes, the impact is most noticeable in rooms that have
            historically been too hot to use comfortably in summer.
          </p>
          <p className="arch-tint__body-text arch-tint__body-text--accent">
            If you have rooms that run hot, a storefront that turns into a
            greenhouse, or an HVAC system that runs constantly in summer — film
            is worth the conversation.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a className="arch-tint__cta-btn arch-tint__cta-btn--secondary" href="#arch-gallery">
              See Our Work →
            </a>
            <a
              className="arch-tint__cta-btn"
              href="https://www.book.downeyautospa.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
            <a className="arch-tint__cta-btn arch-tint__cta-btn--secondary" href="tel:2707763914">
              <Phone size={18} />
              270-776-3914
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 6 — GALLERY */}
      <section id="arch-gallery" className="arch-tint__section arch-tint__section--dark">
        <div className="arch-tint__container">
          <h2 className="arch-tint__section-heading">
            Our work, right here in the region.
          </h2>
          <p className="arch-tint__body-text">
            Residential, commercial, storefront — every job below was installed
            by us, locally. Real installs tell you more than specs do.
          </p>
        </div>
        <div className="arch-tint__gallery-wrap">
          <PhotoGallery
            items={archGalleryItems}
            sectionName="architectural_tint_gallery"
          />
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <section className="arch-tint__section arch-tint__section--mid">
        <div className="arch-tint__container">
          <h2 className="arch-tint__section-heading">Common Questions</h2>
          <div className="arch-tint__faq-list">
            {faqs.map((item) => (
              <div key={item.q} className="arch-tint__faq-item">
                <h3 className="arch-tint__faq-q">{item.q}</h3>
                <p className="arch-tint__faq-a">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA */}
      <section className="arch-tint__section arch-tint__final-cta-section">
        <div className="arch-tint__container arch-tint__container--center">
          <h2 className="arch-tint__section-heading">
            Every architectural job starts with a conversation.
          </h2>
          <p className="arch-tint__hero-sub">
            We visit the space, assess the glass, understand what you're trying
            to achieve, and recommend the right film for the job — not just the
            most expensive one.
          </p>
          <p className="arch-tint__body-text arch-tint__body-text--note">
            Family-owned, locally operated, and invested in getting it right.
          </p>
          <div className="arch-tint__contact-block">
            <a className="arch-tint__contact-line" href="tel:2707763914">
              <Phone size={16} />
              270-776-3914 &nbsp;—&nbsp; best way to start an architectural
              quote
            </a>
            <a
              className="arch-tint__contact-line"
              href="https://www.google.com/maps/place/?q=place_id:ChIJ2WhtOE-5ZYgRJDJLH_jFRfI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={16} />
              104 State Street, Unit 3, Franklin, KY 42134
            </a>
            <span className="arch-tint__contact-line">
              <Clock size={16} />
              Mon–Fri 8am–4:30pm &nbsp;|&nbsp; Sat 5am–9am
            </span>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            <a
              className="arch-tint__cta-btn arch-tint__cta-btn--large"
              href="https://www.book.downeyautospa.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
            <a
              className="arch-tint__cta-btn arch-tint__cta-btn--large arch-tint__cta-btn--secondary"
              href="tel:2707763914"
            >
              <Phone size={18} />
              Call for a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArchitecturalTinting;
