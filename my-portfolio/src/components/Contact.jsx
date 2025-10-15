import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("https://formspree.io/f/xwprwywd", {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
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
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto bg-white">
      <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-center mb-12 text-indigo-600">
        Contact Me
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column - Labels and Info */}
        <div className="md:w-1/3 flex flex-col gap-4">
          <div>
            <h3 className="font-semibold text-gray-700">Email</h3>
            <p className="text-teal-500">angelunabanogbanog14@gmail.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Phone</h3>
            <p className="text-teal-500">09672471918</p>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="md:w-2/3">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="flex-1 p-3 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="flex-1 p-3 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              className="p-3 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              rows="5"
              required
            />
            <button
              type="submit"
              className="bg-indigo-500 text-white p-3 rounded-xl font-semibold hover:bg-teal-400 transition"
            >
              Send Message
            </button>
          </form>

          {submitted && (
            <p className="text-green-500 mt-4 text-center">Message sent successfully!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
