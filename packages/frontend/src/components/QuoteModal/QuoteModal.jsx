import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

import "./QuoteModal.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  vehicleYear: "",
  vehicleMakeModel: "",
  requestedPackage: "",
  timeframe: "",
};

function QuoteModal({
  activeModal,
  handleCloseClick,
  onQuoteModalSubmit,
  handleQuoteButtonClick,
}) {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: form.name,
      vehicleYear: form.vehicleYear,
      vehicleMakeModel: form.vehicleMakeModel,
      requestedPackage: form.requestedPackage,
      email: form.email,
      phone: form.phone,
      ...(form.timeframe ? { timeframe: form.timeframe } : {}),
    };
    onQuoteModalSubmit(formData);
    setForm(initialForm);
  };

  return (
    <ModalWithForm
      isOpen={activeModal === "get quote"}
      title="Get Custom Quote"
      buttonText="Press Here for your custom quote"
      activeModal={activeModal}
      handleCloseClick={handleCloseClick}
      onSubmit={handleSubmit}
      handleQuoteButtonClick={handleQuoteButtonClick}
    >
      <label
        htmlFor="quote-name"
        className="modal__label modal__label-text-box"
      >
        Name{""}
        <input
          type="text"
          className="modal__input"
          id="quote-name"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </label>
      <label
        htmlFor="quote-email"
        className="modal__label modal__label-text-box"
      >
        Email{" "}
        <input
          type="email"
          className="modal__input"
          id="quote-email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </label>

      <label
        htmlFor="quote-phone"
        className="modal__label modal__label-text-box"
      >
        Phone{" "}
        <input
          type="tel"
          className="modal__input"
          id="quote-phone"
          name="phone"
          placeholder="Enter your phone number"
          value={form.phone}
          onChange={handleChange}
          required
        />
      </label>
      <label
        htmlFor="quote-year"
        className="modal__label modal__label-text-box"
      >
        Vehicle Year{""}
        <input
          type="text"
          className="modal__input"
          id="quote-year"
          name="vehicleYear"
          placeholder="Vehicle Year"
          value={form.vehicleYear}
          onChange={handleChange}
          required
        />
      </label>
      <label
        htmlFor="quote-vehicle-make"
        className="modal__label modal__label-text-box"
      >
        Vehicle Make and Model{""}
        <input
          type="text"
          className="modal__input"
          id="quote-vehicle-make"
          name="vehicleMakeModel"
          placeholder="Vehicle Make and model"
          value={form.vehicleMakeModel}
          onChange={handleChange}
          required
        />
      </label>
      <label
        htmlFor="quote-package"
        className="modal__label modal__label-text-box"
      >
        Describe what your looking to have done!{""}
        <input
          type="text"
          className="modal__input"
          id="quote-package"
          name="requestedPackage"
          placeholder="Insert awesome details here"
          value={form.requestedPackage}
          onChange={handleChange}
          required
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__label">
          When would you like to schedule? (optional)
        </legend>
        <label
          htmlFor="timeframe-asap"
          className="modal__label modal__label-radio"
        >
          <input
            id="timeframe-asap"
            type="radio"
            className="modal__radio-input"
            name="timeframe"
            value="asap"
            checked={form.timeframe === "asap"}
            onChange={handleChange}
          />
          Needed it done last week
        </label>
        <label
          htmlFor="timeframe-soon"
          className="modal__label modal__label-radio"
        >
          <input
            id="timeframe-soon"
            type="radio"
            className="modal__radio-input"
            name="timeframe"
            value="week"
            checked={form.timeframe === "week"}
            onChange={handleChange}
          />
          Within a Week or Two
        </label>
        <label
          htmlFor="timeframe-flexible"
          className="modal__label modal__label-radio"
        >
          <input
            id="timeframe-flexible"
            type="radio"
            className="modal__radio-input"
            name="timeframe"
            value="month"
            checked={form.timeframe === "month"}
            onChange={handleChange}
          />
          Within a Month or Two
        </label>
        <label
          htmlFor="timeframe-priceshopping"
          className="modal__label modal__label-radio"
        >
          <input
            id="timeframe-priceshopping"
            type="radio"
            className="modal__radio-input"
            name="timeframe"
            value="unknown"
            checked={form.timeframe === "unknown"}
            onChange={handleChange}
          />
          Im price shopping for now
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default QuoteModal;
