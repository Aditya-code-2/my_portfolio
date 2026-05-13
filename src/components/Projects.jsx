import { motion } from "framer-motion";

import project from "../assets/project.jpg";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 sm:px-10 py-24 relative overflow-hidden"
    >

      {/* BLUR EFFECT */}
      <div className="absolute w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-white/5 blur-[120px] rounded-full top-10 left-0"></div>

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-20 text-center"
        >

          <p className="text-gray-400 uppercase tracking-[5px] mb-5 text-sm">
            My Work
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Featured Projects
          </h1>

        </motion.div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="group bg-white/5 border border-white/10 rounded-[30px] overflow-hidden backdrop-blur-xl hover:-translate-y-2 hover:scale-[1.02] duration-500 shadow-xl"
          >

            {/* IMAGE */}
            <div className="h-[240px] sm:h-[250px] overflow-hidden">

              <img
                src={project}
                alt="project"
                className="w-full h-full object-cover group-hover:scale-110 duration-500"
              />

            </div>

            {/* CONTENT */}
            <div className="p-6">

              <h1 className="text-2xl font-bold">
                Modern Portfolio
              </h1>

              <p className="text-gray-400 mt-4 leading-relaxed">
                Premium portfolio website with smooth animations
                and modern luxury UI design.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 mt-8">

                <a
                  href="https://my-portfolio-beta-ecru-43.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 hover:bg-gray-200 duration-300 shadow-lg"
                >
                  Live Preview
                </a>

                <a
                  href="https://github.com/Aditya-code-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full border border-white/20 text-sm hover:bg-white/10 duration-300"
                >
                  Source Code
                </a>

              </div>

            </div>

          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="group bg-white/5 border border-white/10 rounded-[30px] overflow-hidden backdrop-blur-xl hover:-translate-y-2 hover:scale-[1.02] duration-500 shadow-xl"
          >

            {/* IMAGE */}
            <div className="h-[240px] sm:h-[250px] overflow-hidden">

              <img
                src={project2}
                alt="project"
                className="w-full h-full object-cover group-hover:scale-110 duration-500"
              />

            </div>

            {/* CONTENT */}
            <div className="p-6">

              <h1 className="text-2xl font-bold leading-snug">
                Scalable WhatsApp Messaging Platform
              </h1>

              <p className="text-gray-400 mt-4 leading-relaxed">
                Built for modern businesses to broadcast smarter,
                engage faster, and grow better on WhatsApp.
                <span className="text-white/80">
                  {" "} (In Progress...)
                </span>
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 mt-8">

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 hover:bg-gray-200 duration-300 shadow-lg"
                >
                  Live Preview
                </a>

                <a
                  href="https://github.com/Aditya-code-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full border border-white/20 text-sm hover:bg-white/10 duration-300"
                >
                  Source Code
                </a>

              </div>

            </div>

          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="group bg-white/5 border border-white/10 rounded-[30px] overflow-hidden backdrop-blur-xl hover:-translate-y-2 hover:scale-[1.02] duration-500 shadow-xl"
          >

            {/* IMAGE */}
            <div className="h-[240px] sm:h-[250px] overflow-hidden">

              <img
                src={project3}
                alt="project"
                className="w-full h-full object-cover group-hover:scale-110 duration-500"
              />

            </div>

            {/* CONTENT */}
            <div className="p-6">

              <h1 className="text-2xl font-bold">
                GPS Tracker
              </h1>

              <p className="text-gray-400 mt-4 leading-relaxed">
                Mini GPS tracker for real-time location updates,
                monitoring and smart tracking solutions.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 mt-8">

                <a
                  href="https://gps-tracker-frontend-3zvy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 hover:bg-gray-200 duration-300 shadow-lg"
                >
                  Live Preview
                </a>

                <a
                  href="https://github.com/Aditya-code-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full border border-white/20 text-sm hover:bg-white/10 duration-300"
                >
                  Source Code
                </a>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Projects;