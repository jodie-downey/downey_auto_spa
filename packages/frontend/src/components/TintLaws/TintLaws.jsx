import "../TermsOfService/TermsOfService.css";

function TintLaws() {
  return (
    <div className="terms">
      <h1 className="terms__title">Kentucky Window Tint Laws</h1>
      <p className="terms__subtitle">
        Reference Guide — Updated After 2024 KY Legislation
      </p>

      <section className="terms__section">
        <h2 className="terms__subtitle">1. Understanding VLT</h2>
        <ul className="terms__list">
          <li className="terms__list-item">
            VLT stands for <strong>Visible Light Transmission</strong> — the
            percentage of light a tinted window allows through.
          </li>
          <li className="terms__list-item">
            The lower the percentage, the darker the tint. A 5% tint lets in
            very little light and is nearly opaque. A 70% tint is nearly clear.
          </li>
          <li className="terms__list-item">
            Kentucky law sets <em>minimum</em> VLT requirements — meaning the
            film you install must let in at least that much light.
          </li>
        </ul>
      </section>

      <section className="terms__section">
        <h2 className="terms__subtitle">2. Kentucky Legal VLT Requirements</h2>
        <ul className="terms__list">
          <li className="terms__list-item">
            <strong>Front Driver Side Window</strong>
            <ul className="terms__sublist">
              <li className="terms__sublist-item">35% minimum VLT</li>
            </ul>
          </li>
          <li className="terms__list-item">
            <strong>Front Passenger Side Window</strong>
            <ul className="terms__sublist">
              <li className="terms__sublist-item">35% minimum VLT</li>
            </ul>
          </li>
          <li className="terms__list-item">
            <strong>Rear Side Windows</strong>
            <ul className="terms__sublist">
              <li className="terms__sublist-item">18% minimum VLT</li>
            </ul>
          </li>
          <li className="terms__list-item">
            <strong>Rear Window</strong>
            <ul className="terms__sublist">
              <li className="terms__sublist-item">18% minimum VLT</li>
            </ul>
          </li>
          <li className="terms__list-item">
            <strong>Full Windshield</strong>
            <ul className="terms__sublist">
              <li className="terms__sublist-item">
                70% or lighter — recently updated under 2024 Kentucky
                legislation
              </li>
            </ul>
          </li>
          <li className="terms__list-item">
            <strong>Windshield Sun Strip</strong>
            <ul className="terms__sublist">
              <li className="terms__sublist-item">
                Non-reflective film, above the AS-1 line only
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="terms__section">
        <h2 className="terms__subtitle">3. Going Darker Than Legal Limits</h2>
        <ul className="terms__list">
          <li className="terms__list-item">
            Some customers choose to go darker than Kentucky's legal minimums —
            for privacy, aesthetics, medical light sensitivity, or personal
            preference.
          </li>
          <li className="terms__list-item">
            If that's your situation, we'll have an honest conversation about
            it. We'll walk you through exactly what you're choosing, and make
            sure you understand the tradeoffs before we touch your vehicle.
          </li>
          <li className="terms__list-item">
            We don't judge the choice. We just make sure you make it informed.
          </li>
          <li className="terms__list-item">
            Going darker than legal limits may result in a fix-it ticket,
            required removal of the film, or a fine. Downey Auto Spa is not
            responsible for citations or legal consequences related to customer
            choices.
          </li>
        </ul>
      </section>

      <section className="terms__section">
        <h2 className="terms__subtitle">4. Tennessee Customers</h2>
        <ul className="terms__list">
          <li className="terms__list-item">
            Tennessee has its own tint laws that differ from Kentucky's. If
            you're a Middle TN customer coming to us in Franklin, KY, you are
            responsible for compliance in your home state.
          </li>
          <li className="terms__list-item">
            We'll walk you through both sets of requirements if that applies to
            you — just let us know when you reach out.
          </li>
        </ul>
      </section>

      <section className="terms__section">
        <h2 className="terms__subtitle">5. Disclaimer</h2>
        <ul className="terms__list">
          <li className="terms__list-item">
            This page is provided as a general reference. Laws can change.
            Downey Auto Spa makes every effort to stay current with Kentucky
            tint legislation, but this page does not constitute legal advice.
          </li>
          <li className="terms__list-item">
            If you have questions, contact us before booking:{" "}
            <strong>270-776-3914</strong> or{" "}
            <strong>jodie@downeyautospa.com</strong>.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default TintLaws;
