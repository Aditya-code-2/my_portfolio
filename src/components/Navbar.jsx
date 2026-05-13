const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/6 border-b border-white/10 shadow-lg shadow-black/20">

      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

        <h1 className="text-2xl font-bold">
          A D I T Y A
        </h1>

        <ul className="flex items-center gap-8 text-gray-300">

          <li>
            <a
              href="#home"
              className="hover:text-white duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-white duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-white duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-white duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
};

export default Navbar;