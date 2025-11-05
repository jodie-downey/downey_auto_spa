import ModalWithForm from "../ModalWithForm/ModalWithForm";

import "./QuoteModal.css";

function QuoteModal({
  activeModal,
  handleCloseClick,
  onQuoteModalSubmit,
  handleQuoteButtonClick,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById("quote-name").value,
      vehicleYear: document.getElementById("quote-year").value,
      vehicleMakeModel: document.getElementById("quote-vehicle-make").value,
      requestedPackage: document.getElementById("quote-package").value,
      email: document.getElementById("quote-email").value,
      phone: document.getElementById("quote-phone").value,
    };

    onQuoteModalSubmit(formData);
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
          type="string"
          className="modal__input"
          id="quote-name"
          placeholder="Name"
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
          placeholder="Enter your email"
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
          placeholder="Enter your phone number"
          required
        />
      </label>
      <label
        htmlFor="quote-year"
        className="modal__label modal__label-text-box"
      >
        Vehicle Year{""}
        <input
          type="string"
          className="modal__input"
          id="quote-year"
          placeholder="Vehicle Year"
          required
        />
      </label>
      <label
        htmlFor="quote-vehicle-make"
        className="modal__label modal__label-text-box"
      >
        Vehicle Make and Model{""}
        <input
          type="string"
          className="modal__input"
          id="quote-vehicle-make"
          placeholder="Vehicle Make and model"
          required
        />
      </label>
      <label
        htmlFor="quote-package"
        className="modal__label modal__label-text-box"
      >
        Describe what your looking to have done!{""}
        <input
          type="string"
          className="modal__input"
          id="quote-package"
          placeholder="Insert awesome details here"
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default QuoteModal;
