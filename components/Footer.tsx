import React from "react";

const Footer = () => {
  return (
    <footer
      className="py-8 border-t border-gray-700"
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Bolt Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
