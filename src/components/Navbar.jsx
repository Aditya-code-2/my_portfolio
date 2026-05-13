import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10 shadow-lg shadow-black/20">

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-[6px]">
          ADITYA
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300">

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

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden duration-300 ${
          open ? "max-h-96 py-6" : "max-h-0"
        }`}
      >

        <ul className="flex flex-col items-center gap-6 text-lg text-gray-300 bg-black/40 backdrop-blur-xl">

          <li>
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="hover:text-white duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="hover:text-white duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="hover:text-white duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
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