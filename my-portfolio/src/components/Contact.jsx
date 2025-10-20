import React, { useState } from "react";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Send data to Formspree
    const response = await fetch("https://formspree.io/f/xwprwywd", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setIsSent(true);
      e.target.reset(); // Clear form
      setTimeout(() => setIsSent(false), 4000); // Hide success after 4 seconds
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-0 px-6 bg-gradient-to-r from-indigo-500 to-teal-400 text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg mb-10">
          I’d love to hear from you! Whether it’s about a project, collaboration, or just to say hello — drop me a message below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-left text-white font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-3 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-left text-white font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-left text-white font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full p-3 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          {/* Submit Button or Success Message */}
          {isSent ? (
            <div className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 px-6 rounded-lg shadow-md transition-all duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white transition-transform duration-300 transform scale-110"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold">Message sent successfully!</span>
            </div>
          ) : (
            <button
              type="submit"
              className="px-8 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-400 transition"
            >
              Send Message
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
