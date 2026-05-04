import { CheckCircle, Phone, MapPin, Clock } from "lucide-react";
import VideoCard from "../VideoCard/VideoCard";
import "./WindowTinting.css";
import heroImage from "../../assets/yukonat4.webp";

const filmCards = [
  {
    id: "carbon",
    name: "Carbon Terraflex",
    badge: "Entry Choice",
    featured: false,
    tagline: "Good heat protection. Outstanding value.",
    body: "Carbon Terraflex is built on true carbon technology — no dye, no fade, no color shift. Ever. It delivers meaningful heat rejection and a clean, dark appearance that looks intentional on any vehicle.",
    irRejection: "42% - 67%",
    specs: [
      "Up to 67% IR heat rejection depending on darkness",
      "99%+ UV protection",
      "Lifetime warranty — no fade, no purple shift",
    ],
    percentages: "50%, 35%, 20%, 15%, 5%",
    bestFor:
      "Customers who want a real upgrade from no tint or outdated dyed films, excellent daily protection, and a price point that makes sense for the vehicle they drive.",
    source: "film_carbon_cta",
  },
  {
    id: "ceramic",
    name: "Ceramic Panaflex",
    badge: "Best Choice",
    featured: true,
    tagline:
      "Maximum heat. Maximum clarity. The film for people who want the best.",
    body: "Ceramic Panaflex is built on the same carbon foundation as Terraflex, then upgraded with a non-conductive ceramic layer that changes what the film can do. The ceramic doesn't just reject more heat — it slows heat transfer into the cabin, so your interior stays cooler longer even after you park. And it does something carbon alone can't match: virtually zero low-angle haze, meaning the view looking out stays perfectly clear even at sharp angles.",
    irRejection: "82% - 89%",
    specs: [
      "Up to 89% IR heat rejection depending on darkness",
      "99.9%+ UV protection",
      "Lifetime warranty",
      "Virtually zero low-angle haze — clearest outward view of any film we offer",
    ],
    percentages: "70%, 50%, 35%, 20%, 15%, 5%",
    bestFor:
      "Customers who run their AC constantly, park outside, have darker-colored vehicles that absorb more heat, or simply want the highest-performing film available.",
    source: "film_ceramic_cta",
  },
];


const faqs = [
  {
    q: "How long does a tint install take?",
    a: "Most full vehicles packages are completed in 4-5 hours. Factory matches and single windows can be completed in as little as one hour.  We'll give you a realistic timeframe when you book.",
  },
  {
    q: "When can I roll my windows down after tinting?",
    a: "Wait 2 days before rolling down your windows. The adhesive needs time to fully cure to the glass. Rolling them down early can cause the film to peel at the edges.",
  },
  {
    q: "When can I wash my car after tinting?",
    a: "You can wash the exterior of your car immediately after tinting. Wait to clean the inside of your windows for at least 5 days. Utilize a non-amonia based cleaner and a fresh, soft microfiber rag for streak free cleaning.",
  },
  {
    q: "Will tint affect my phone signal, GPS, or radar detector?",
    a: "Ceramic Panaflex uses non-conductive ceramic particles — it does not interfere with electronic signals. Carbon Terraflex is also signal-safe. Neither film contains metal, so both are fully compatible with GPS, cell service, toll transponders, and radar detectors.",
  },
  {
    q: "Do you tint the full windshield?",
    a: "Yes. Kentucky recently updated its law — 70% VLT and lighter is now legal on the full windshield. We also offer a sun strip (non-reflective, above the AS-1 line) for customers who want just the top portion tinted. If you're not sure what's right for your vehicle, give us a call.",
  },
  {
    q: "What's the difference between 20% and 35% — will I notice it?",
    a: "Yes, you'll notice it. 35% is considered medium — visible privacy but still relatively light inside the cabin. 20% is noticeably darker and gives strong privacy. 5% is limo-dark. We can show you samples in the shop if you want to see them before you commit.",
  },
  {
    q: "What's covered under the lifetime warranty?",
    a: "Both Terraflex and Panaflex carry a lifetime warranty through FlexFilm covering peeling, cracking, adhesive failure, delamination, and color change. The warranty covers the original vehicle owner for the life of the vehicle.",
  },
];

function WindowTinting({ handleQuoteButtonClick }) {
  return (
    <div className="window-tint">
      {/* SECTION 1 — HERO */}
      <section
        className="window-tint__hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="window-tint__hero-overlay" />
        <div className="window-tint__hero-content">
          <h1 className="window-tint__hero-headline">
            Your car is a greenhouse.
            <br />
            Tint fixes that.
          </h1>
          <p className="window-tint__hero-sub">
            Professional window tinting in Franklin, KY — Ceramic Panaflex and
            Carbon Terraflex film, lifetime warranty, installed right the first
            time.
          </p>
          <p className="window-tint__hero-body">
            Keep the heat out. Protect your interior. Drive in comfort — even in
            a Kentucky summer.
          </p>
          <div className="window-tint__hero-actions">
            <a
              className="window-tint__cta-btn window-tint__cta-btn--secondary"
              href="#film-comparison"
            >
              Compare Films →
            </a>
            <a
              className="window-tint__cta-btn window-tint__cta-btn--secondary"
              href="#darkness-examples"
            >
              See Popular Packages →
            </a>
            <a
              className="window-tint__cta-btn"
              href="https://www.book.downeyautospa.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
            <button
              className="window-tint__cta-btn window-tint__cta-btn--secondary"
              onClick={() => handleQuoteButtonClick("tint_hero")}
            >
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE PROBLEM */}
      <section className="window-tint__section window-tint__section--dark">
        <div className="window-tint__container">
          <h2 className="window-tint__section-heading">
            A Kentucky summer in an untinted car isn't uncomfortable. It's
            punishment.
          </h2>
          <p className="window-tint__body-text">
            You know the feeling. You open the door and a wall of heat hits you.
            The leather burns. The dashboard is cracking. You turn the AC up and
            it runs the whole drive just trying to catch up.
          </p>
          <p className="window-tint__body-text">
            And the damage isn't just to your comfort. UV rays penetrate
            untinted glass constantly — fading your upholstery, cracking your
            dash, and hitting your skin on every commute. The inside of your car
            ages faster than it should, and you feel it every time you get in.
          </p>
          <p className="window-tint__body-text window-tint__body-text--accent">
            Window tint is the most cost-effective upgrade you can put on a
            vehicle. Nothing else does this much for the daily driving
            experience at this price.
          </p>
        </div>
      </section>

      {/* SECTION 3 — FILM COMPARISON */}
      <section
        id="film-comparison"
        className="window-tint__section window-tint__section--mid"
      >
        <div className="window-tint__container">
          <h2 className="window-tint__section-heading">
            Two great films. One right choice for your situation. No Dye-Ever.
          </h2>
          <p className="window-tint__body-text">
            We carry two professional-grade FlexFilm lines. Both are
            lifetime-warranted, professional-only films. The difference is
            performance level and what matters most to you.
          </p>

          <div className="window-tint__film-grid">
            {filmCards.map((film) => (
              <div
                key={film.id}
                className={`window-tint__film-card${film.featured ? " window-tint__film-card--featured" : ""}`}
              >
                <span
                  className={`window-tint__film-badge${film.featured ? " window-tint__film-badge--featured" : ""}`}
                >
                  {film.badge}
                </span>
                <h3 className="window-tint__film-name">{film.name}</h3>
                <p className="window-tint__film-tagline">{film.tagline}</p>
                <p className="window-tint__film-body">{film.body}</p>
                <div className="window-tint__film-ir">
                  <span className="window-tint__film-ir-number">
                    {film.irRejection}
                  </span>
                  IR Heat Rejection
                </div>
                <ul className="window-tint__film-specs">
                  {film.specs.map((spec) => (
                    <li key={spec}>
                      <CheckCircle size={15} />
                      {spec}
                    </li>
                  ))}
                </ul>
                <p className="window-tint__film-percentages">
                  <strong>Available:</strong> {film.percentages}
                </p>
                <p className="window-tint__film-best-for">
                  <strong>Best for:</strong> {film.bestFor}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "auto" }}>
                  <a
                    className="window-tint__cta-btn window-tint__cta-btn--card"
                    href="https://www.book.downeyautospa.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
                  </a>
                  <button
                    className="window-tint__cta-btn window-tint__cta-btn--card window-tint__cta-btn--secondary"
                    onClick={() => handleQuoteButtonClick(film.source)}
                  >
                    Get a Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h3 id="darkness-examples" className="window-tint__subheading">
            See how each darkness level actually looks.
          </h3>
          <p className="window-tint__body-text">
            The percentage is just a number until you see it on a real vehicle.
            Browse our installs below — each one shows a specific darkness
            combination so you can find the look you want before you commit.
          </p>
          <div className="window-tint__video-grid">
            <VideoCard
              videoId="Wo8-2ZM9Wws"
              title="Legal Ceramic Window Tint in Kentucky"
              description="35% Front Roll Down Windows, 20% Rear Windows and Back Glass, 5% Sun Strip"
            />
            <VideoCard
              videoId="1CuV9_Uvpu4"
              title="Even Side Darkness / Light Windshield"
              description="50% Full Windshield, 20% Front Roll Downs to match back factory tint"
            />
            <VideoCard
              videoId="5YaQXFNqH2k"
              title="Moderate Darkness with Sun Strip"
              description="5% Sun Strip, 20% Front Roll Downs, 20% Back Roll Downs and Back Glass"
            />
            <VideoCard
              videoId="CFLEk7ua8fQ"
              title="Carbon Maximum Darkness"
              description="30% Front Windshield, 5% Roll Downs and Back Glass"
            />
            <VideoCard
              videoId="QZfbj1Xhiyc"
              title="Factory Match Tint / Clear Windshield"
              description="20% Front Roll Downs to match factory back tint, 70% Clear Full Windshield"
            />
            <VideoCard
              videoId="Cf5BW4ZkZN4"
              title="Moderate Darkness / Maximum Heat Rejection"
              description="50% Windshield, 15% Front Windows, 15% Back Roll Downs and Back Glass"
            />
            <VideoCard
              videoId="TeUNVBGspaY"
              title="Maximum Darkness and Heat Rejection"
              description="30% Front Windshield, 5% Front Roll Downs, 20% Back Roll Downs and Back Glass"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3.5 — CARBON VS CERAMIC WALKTHROUGH VIDEO */}
      <section className="window-tint__section window-tint__section--dark">
        <div className="window-tint__container window-tint__container--center">
          <h2 className="window-tint__section-heading">
            Carbon vs. Ceramic: See the difference yourself.
          </h2>
          <p className="window-tint__body-text" style={{ maxWidth: "680px" }}>
            Watch our side-by-side vehicle walkarounds comparing Carbon Terraflex and Ceramic Panaflex — same darkness level, different film. You&apos;ll see exactly how the two look on real vehicles in real conditions before you decide.
          </p>
          <div className="window-tint__video-embed">
            <iframe
              src="https://www.youtube.com/embed/Urin6CfGue8?si=Bnc301gYl3LpOPPz"
              title="Carbon vs Ceramic Window Tint Comparison"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 — KNOW THE LAW */}
      <section className="window-tint__section window-tint__section--dark">
        <div className="window-tint__container">
          <h2 className="window-tint__section-heading">
            Know the law before you tint.
          </h2>
          <p className="window-tint__body-text">
            Kentucky sets minimum VLT (Visible Light Transmission) requirements
            for each window position — and the rules were recently updated for
            full windshields. We've put together a full breakdown covering legal
            limits, what happens if you want to go darker, and what Tennessee
            customers need to know.
          </p>
          <a className="window-tint__cta-btn window-tint__cta-btn--secondary" href="/tint-laws">
            View Kentucky Tint Law Guide →
          </a>
        </div>
      </section>

      {/* SECTION 5 — ARCHITECTURAL TINT */}
      <section className="window-tint__section window-tint__section--mid">
        <div className="window-tint__container">
          <h2 className="window-tint__section-heading">
            We also tint homes, offices, and commercial spaces.
          </h2>
          <p className="window-tint__body-text">
            Window film isn't just for cars. If you have a room that gets too
            hot, too bright, or too exposed — we can fix that too.
          </p>
          <p className="window-tint__body-text">
            FlexFilm DualFlex architectural film delivers the same
            professional-grade performance as our automotive line, applied to
            flat glass in homes, offices, storefronts, and commercial buildings.
            Energy savings, UV protection, privacy, and aesthetics — all without
            replacing glass.
          </p>
          <a
            className="window-tint__cta-btn"
            href="/window-tinting/architectural"
          >
            See Architectural Tinting →
          </a>
        </div>
      </section>

      {/* SECTION 6 — AI ASSISTANT PLACEHOLDER */}
      <section className="window-tint__section window-tint__section--dark">
        <div className="window-tint__container window-tint__container--center">
          <h2 className="window-tint__section-heading">
            Not sure which film or percentage is right for your vehicle?
          </h2>
          <p className="window-tint__hero-sub">
            Give us a call. Two minutes, no runaround.
          </p>
          <a
            className="window-tint__cta-btn window-tint__cta-btn--large"
            href="tel:2707763914"
          >
            <Phone size={18} />
            270-776-3914
          </a>
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <section className="window-tint__section window-tint__section--mid">
        <div className="window-tint__container">
          <h2 className="window-tint__section-heading">Common Questions</h2>
          <div className="window-tint__faq-list">
            {faqs.map((item) => (
              <div key={item.q} className="window-tint__faq-item">
                <h3 className="window-tint__faq-q">{item.q}</h3>
                <p className="window-tint__faq-a">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA */}
      <section className="window-tint__section window-tint__final-cta-section">
        <div className="window-tint__container window-tint__container--center">
          <h2 className="window-tint__section-heading">
            Ready to get comfortable in your own vehicle again?
          </h2>
          <p className="window-tint__hero-sub">
            Family-owned shop in Franklin, KY. We install every job ourselves
            and back every install with a lifetime warranty.
          </p>
          <div className="window-tint__contact-block">
            <a className="window-tint__contact-line" href="tel:2707763914">
              <Phone size={16} />
              270-776-3914
            </a>
            <a
              className="window-tint__contact-line"
              href="https://www.google.com/maps/place/?q=place_id:ChIJ2WhtOE-5ZYgRJDJLH_jFRfI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={16} />
              104 State Street, Unit 3, Franklin, KY 42134
            </a>
            <span className="window-tint__contact-line">
              <Clock size={16} />
              Mon–Fri 8am–4:30pm &nbsp;|&nbsp; Sat 5am–9am
            </span>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            <a
              className="window-tint__cta-btn window-tint__cta-btn--large"
              href="https://www.book.downeyautospa.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
            <button
              className="window-tint__cta-btn window-tint__cta-btn--large window-tint__cta-btn--secondary"
              onClick={() => handleQuoteButtonClick("tint_final_cta")}
            >
              Get a Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WindowTinting;
