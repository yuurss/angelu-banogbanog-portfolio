import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
      <div className="text-center mb-6">
        <p>Email: <a href="mailto:angelunabanogbanog14@gmail.com" className="text-blue-600 hover:underline">angelunabanogbanog14@gmail.com</a></p>
        <p>Phone: <a href="tel:09672471918" className="text-blue-600 hover:underline">09672471918</a></p>
      </div>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-3 border rounded" />
        <input type="email" placeholder="Your Email" className="p-3 border rounded" />
        <textarea placeholder="Your Message" className="p-3 border rounded" rows="5"></textarea>
        <button type="submit" className="bg-blue-600 text-white p-3 rounded font-semibold hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
