const Navbar = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full min-h-16 sticky top-0 flex z-[999] justify-between items-center px-8 md:px-24 text-xl font-semibold bg-white shadow-md">
      <h2 className="text-pink-500">Portfolio</h2>
      <ul className="flex gap-6 md:gap-10">
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
    </nav>
  );
};

export default Navbar;
