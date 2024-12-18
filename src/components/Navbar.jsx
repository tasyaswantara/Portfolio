import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false); // Close the menu after navigating
  };

  return (
    <nav className="w-full min-h-16 sticky top-0 z-[999] bg-white shadow-md">
      <div className="flex justify-between items-center px-6 md:px-24 py-4">
        {/* Logo */}
        <h2 className="text-pink-500 text-lg md:text-xl font-bold">Portfolio</h2>

        {/* Hamburger Menu for Mobile */}
        <div
          className="md:hidden text-2xl cursor-pointer text-gray-800"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 md:gap-10 text-lg font-semibold">
          <li
            className="cursor-pointer hover:text-pink-500 transition duration-300"
            onClick={() => handleScroll("home")}
          >
            Home
          </li>
          <li
            className="cursor-pointer hover:text-pink-500 transition duration-300"
            onClick={() => handleScroll("portfolio")}
          >
            Portfolio
          </li>
          <li
            className="cursor-pointer hover:text-pink-500 transition duration-300"
            onClick={() => handleScroll("contact")}
          >
            Contact
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 text-base font-semibold bg-white shadow-md">
          <li
            className="cursor-pointer hover:text-pink-500 transition duration-300"
            onClick={() => handleScroll("home")}
          >
            Home
          </li>
          <li
            className="cursor-pointer hover:text-pink-500 transition duration-300"
            onClick={() => handleScroll("portfolio")}
          >
            Portfolio
          </li>
          <li
            className="cursor-pointer hover:text-pink-500 transition duration-300"
            onClick={() => handleScroll("contact")}
          >
            Contact
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
