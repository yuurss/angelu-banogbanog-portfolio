import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-xl font-bold text-indigo-600">Angelu Banogbanog</div>
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-700 hover:text-indigo-600">
              {link.name}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-gray-700">
            {open ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 py-2 bg-white shadow flex flex-col space-y-2">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-700 hover:text-indigo-600">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
