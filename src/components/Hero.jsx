// src/components/Hero.jsx

import { motion } from "framer-motion";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative pt-32"
    >

      {/* Blur Effects */}
      <div className="absolute w-[300px] h-[300px] bg-white/10 blur-[120px] rounded-full top-20 left-20"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-gray-400 mb-4 tracking-[4px] uppercase">
            Welcome To My Portfolio
          </p>

          <h1 className="text-5
          xl md:text-7xl font-bold leading-tight">
            Hi,<br />
            I'm Aditya
          </h1>

          <p className="text-gray-400 mt-6 max-w-lg leading-relaxed text-lg">
            
             I don’t chase trends, I deploy them.  <br/>
                     Turning complex business ideas into scalable backend solutions using Java and Spring Boot. </p>

          {/* BUTTONS */}
          <div className="flex items-center gap-4 mt-10">

            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 hover:bg-gray-200 duration-300"
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-white/10 blur-3xl rounded-[40px]"></div>

            {/* Image Card */}
            <div className="relative w-[320px] h-[525px] rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl">

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