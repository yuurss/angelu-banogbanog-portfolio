import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    });
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>

      <div className="text-center mb-6">
        <p>
          Email:{" "}
          <a
            href="mailto:angelunabanogbanog14@gmail.com"
            className="text-blue-600 hover:underline"
          >
            angelunabanogbanog14@gmail.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:09672471918" className="text-blue-600 hover:underline">
            09672471918
          </a>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 border rounded"
            required
        />
        <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 border rounded"
            required
        />
        <textarea
            name="message"
            placeholder="Your Message"
            className="p-3 border rounded"
            rows="5"
            required
        ></textarea>

        {/* <-- Replace your old button with this one */}
        <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded font-semibold hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
        >
            Send Message
        </button>
        </form>
      {submitted && (
        <p className="text-green-500 mt-4 text-center">
          Message sent successfully!
        </p>
      )}
    </section>
  );
};

export default Contact;
