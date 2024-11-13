import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <main className="contact">
      <section className="contact__container">
        <p className="contact__title">Get in Touch with Us</p>
        <p className="contact__text">
          Have questions or want to learn more about how City Park Authority can
          transform your parking facilities? We're here to help. Whether you're
          interested in implementing our gateless parking solutions, have
          technical inquiries, or need customer support, reach out to our team
          today.
        </p>
      </section>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="contact__form"
      >
        <input
          type="hidden"
          name="access_key"
          value="REPLACE WITH WEB3FORMS ACCESS KEY"
        />
        <div className="contact__horizontalFormDiv">
          <div className="contact__field">
            <label className="contact__label" htmlFor="name">
              First Name
            </label>
            <input
              className="contact__textField"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="contact__field">
            <label className="contact__label" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="contact__textField"
              type="text"
              name="lastName"
              required
            />
          </div>
        </div>
        <div className="contact__horizontalFormDiv">
          <div className="contact__field">
            <label className="contact__label" htmlFor="email">
              Email Address
            </label>
            <input
              className="contact__textField"
              type="email"
              name="email"
              required
            />
          </div>
          <div className="contact__field">
            <label className="contact__label" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="contact__textField"
              type="tel"
              name="phone"
              required
            />
          </div>
        </div>
        <div className="contact__messageDiv">
          <label className="contact__label" htmlFor="message">
            Message
          </label>
          <textarea name="message" className="contact__message" required></textarea>
          <button type="submit" className="contact__submit">
            SUBMIT
          </button>
        </div>
      </form>
    </main>
  );
};

export default Contact;
