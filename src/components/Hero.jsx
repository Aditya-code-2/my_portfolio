// src/components/Hero.jsx

import { motion } from "framer-motion";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 sm:px-10 relative pt-32 overflow-hidden"
    >

      {/* BLUR EFFECTS */}
      <div className="absolute w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-white/10 blur-[120px] rounded-full top-10 left-0"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >

          <p className="text-gray-400 mb-5 tracking-[5px] uppercase text-sm">
            Welcome To My Portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">

            Hi, <br />

            I'm{" "}

            <span className="text-white drop-shadow-lg">
              Aditya
            </span>

          </h1>

          <p className="text-gray-400 mt-8 max-w-xl leading-relaxed text-base sm:text-lg mx-auto md:mx-0">

            I don’t chase trends, I deploy them.
            <br />

            Turning complex business ideas into scalable backend
            solutions using Java and Spring Boot.

          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-5 mt-10">

            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 hover:bg-gray-200 duration-300 shadow-lg"
            >
              Explore Work
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 duration-300"
            >
              Contact Me
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* GLOW */}
            <div className="absolute inset-0 bg-white/10 blur-3xl rounded-[40px]"></div>

            {/* IMAGE CARD */}
            <div className="relative w-[320px] h-[525px] rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">

              <img
                src={profile}
                alt="profile"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;