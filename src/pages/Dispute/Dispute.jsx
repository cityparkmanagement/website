import React from "react";
import "./Dispute.scss";

const Dispute = () => {
  return (
    <main className="dispute">
      <section className="dispute__container">
        <p className="dispute__title">Dispute a Notice</p>
        <p className="dispute__text">
          Providing incorrect information below may lead to the rejection of
          your appeal. Additionally, if your appeal is denied and full payment
          is not received, all provided data may be shared with relevant debt
          collection agencies.
        </p>
      </section>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="dispute__form"
      >
        <input
          type="hidden"
          F
          name="access_key"
          value="REPLACE WITH WEB3FORMS ACCESS KEY"
        />
        <div className="dispute__horizontalFormDiv">
          <div className="dispute__field">
            <label className="dispute__label" htmlFor="name">
              First Name
            </label>
            <input
              className="dispute__textField"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="dispute__field">
            <label className="dispute__label" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="dispute__textField"
              type="text"
              name="lastName"
              required
            />
          </div>
        </div>
        <div className="dispute__horizontalFormDiv">
          <div className="dispute__field">
            <label className="dispute__label" htmlFor="reference">
              Notice Reference Number
            </label>
            <input
              className="dispute__textField"
              type="text"
              name="reference"
              required
            />
          </div>
          <div className="dispute__field">
            <label className="dispute__label" htmlFor="registration">
              Vehicle Registration
            </label>
            <input
              className="dispute__textField"
              type="text"
              name="registration"
              required
            />
          </div>
        </div>
        <div className="dispute__horizontalFormDiv">
          <div className="dispute__field">
            <label className="dispute__label" htmlFor="email">
              Email Address
            </label>
            <input
              className="dispute__textField"
              type="email"
              name="email"
              required
            />
          </div>
          <div className="dispute__field">
            <label className="dispute__label" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="dispute__textField"
              type="tel"
              name="phone"
              required
            />
          </div>
        </div>
        <div className="dispute__formDiv">
          <div className="dispute__addressField">
            <label className="dispute__label" htmlFor="address1">
              Address Line 1
            </label>
            <input
              className="dispute__textField"
              type="text"
              name="address1"
              required
            />
          </div>
          <div className="dispute__addressField">
            <label className="dispute__label" htmlFor="address2">
              Address Line 2
            </label>
            <input className="dispute__textField" type="text" name="address2" />
          </div>
        </div>
        <div className="dispute__horizontalFormDiv">
          <div className="dispute__field">
            <label className="dispute__label" htmlFor="city">
              City
            </label>
            <input
              className="dispute__textField"
              type="text"
              name="city"
              required
            />
          </div>
          <div className="dispute__field">
            <label className="dispute__label" htmlFor="County">
              County
            </label>
            <input
              className="dispute__textField"
              type="text"
              name="County"
              required
            />
          </div>
        </div>
        <div className="dispute__horizontalFormDiv">
          <div className="dispute__field">
            <label className="dispute__label" htmlFor="postCode">
              Postal Code
            </label>
            <input
              className="dispute__textField"
              type="text"
              name="postCode"
              required
            />
          </div>
        </div>
        <div className="dispute__formDiv">
          <div className="dispute__addressField">
            <label className="dispute__label" htmlFor="reason">
              Reason for Appeal
            </label>
            <input
              className="dispute__textField"
              type="text"
              name="reason"
              required
            />
          </div>
        </div>
        <div className="dispute__messageDiv">
          <label className="dispute__label" htmlFor="additional" required>
            Additional information
          </label>
          <textarea name="additional" className="dispute__message"></textarea>
          <button type="submit" className="dispute__submit">
            SUBMIT
          </button>
        </div>
      </form>
    </main>
  );
};

export default Dispute;
