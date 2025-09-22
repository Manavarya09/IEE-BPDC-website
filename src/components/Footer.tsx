import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-100 py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="font-semibold">© {new Date().getFullYear()} IEEE Website</span>
          <span className="ml-2">All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
