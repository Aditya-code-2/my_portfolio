import { motion } from "framer-motion";
import profile from "../assets/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 sm:px-10 py-24 relative overflow-hidden"
    >

      {/* BLUR EFFECT */}
      <div className="absolute w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-white/5 blur-[120px] rounded-full bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
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

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >

          <p className="text-gray-400 uppercase tracking-[5px] mb-5 text-sm">
            About Me
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">

            Java <br />

            <span className="text-white/90">
             Backend Developer
            </span>

          </h1>

          <p className="text-gray-400 mt-8 leading-relaxed text-base sm:text-lg">
                        Java & Spring Boot Developer with a strong focus on
            backend architecture, API development and scalable
            application design.
          

          </p>

          <p className="text-gray-400 mt-6 leading-relaxed text-base sm:text-lg">

                    Skilled in building secure and maintainable systems,
            integrating databases and developing high-performance
            web applications aligned with modern development standards.

          </p>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">

            {/* CARD 1 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:bg-white/10 duration-300">

              <h1 className="text-2xl sm:text-3xl font-bold">
                Loading...
              </h1>

              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Years Experience
              </p>

            </div>

            {/* CARD 2 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:bg-white/10 duration-300">

              <h1 className="text-2xl sm:text-3xl font-bold">
                Counting...
              </h1>

              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Projects
              </p>

            </div>

            {/* CARD 3 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:bg-white/10 duration-300">

              <h1 className="text-2xl sm:text-3xl font-bold">
                Unlocked
              </h1>

              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Creativity
              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;