import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-5 sm:px-10 py-24"
    >

      <div className="max-w-5xl mx-auto text-center">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-gray-400 uppercase tracking-[6px] text-sm mb-5">
            Contact
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Let’s Work Together
          </h1>

          <p className="text-gray-400 mt-8 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Have a project idea or want to collaborate?
            Feel free to reach out and let’s create something amazing.
          </p>

        </motion.div>

        {/* CONTACT BOXES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/techpreter_1?igsh=M3gxeGpyYTFma3Ax"
            target="_blank"
            className="bg-white/5 border border-white/10 rounded-[30px] p-8 hover:bg-white/10 duration-300"
          >

            <h1 className="text-2xl font-bold">
              Instagram
            </h1>

            <p className="text-gray-400 mt-4">
              Follow my creative journey.
            </p>

          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/Aditya-code-2"
            target="_blank"
            className="bg-white/5 border border-white/10 rounded-[30px] p-8 hover:bg-white/10 duration-300"
          >

            <h1 className="text-2xl font-bold">
              GitHub
            </h1>

            <p className="text-gray-400 mt-4">
              Explore my repositories.
            </p>

          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/aditya-kumar-aa3256253"
            target="_blank"
            className="bg-white/5 border border-white/10 rounded-[30px] p-8 hover:bg-white/10 duration-300"
          >

            <h1 className="text-2xl font-bold">
              LinkedIn
            </h1>

            <p className="text-gray-400 mt-4">
              Let’s connect professionally.
            </p>

          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;