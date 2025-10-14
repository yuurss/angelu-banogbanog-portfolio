import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-800 text-white text-center">
      &copy; {new Date().getFullYear()} Boss. All rights reserved.
    </footer>
  );
};

export default Footer;
