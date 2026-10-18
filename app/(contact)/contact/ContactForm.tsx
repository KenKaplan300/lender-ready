"use client";

export default function ContactForm() {
  return (
    <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
      <div>
        <label htmlFor="cf-name">
          Full Name <span className="req">*</span>
        </label>{" "}
        <input
          type="text"
          id="cf-name"
          name="name"
          placeholder="Your name"
          required
        />
      </div>
      <div>
        <label htmlFor="cf-email">
          Email Address <span className="req">*</span>
        </label>{" "}
        <input
          type="email"
          id="cf-email"
          name="email"
          placeholder="you@company.com"
          required
        />
      </div>
      <div>
        <label htmlFor="cf-company">Company Name</label>{" "}
        <input
          type="text"
          id="cf-company"
          name="company"
          placeholder="Your company (optional)"
        />
      </div>
      <div>
        <label htmlFor="cf-message">
          Tell us more about your financing needs
        </label>
        <textarea
          id="cf-message"
          name="message"
          placeholder="Property type, loan amount, timeline — whatever's helpful."
        ></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  );
}
