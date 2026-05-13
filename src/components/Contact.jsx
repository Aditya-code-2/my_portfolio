const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >

      <div className="max-w-4xl mx-auto text-center">

        <p className="text-gray-400 uppercase tracking-[4px] mb-4">
          Contact
        </p>

        <h1 className="text-5xl md:text-6xl font-bold">
          Let’s Work Together
        </h1>

        <p className="text-gray-400 mt-8 text-lg leading-relaxed">
          Have a project idea or want to collaborate?
          Feel free to reach out and let’s create something amazing.
        </p>

        <div className="mt-12 flex justify-center gap-6 flex-wrap">

          <a
            href="https://www.instagram.com/techpreter_1?igsh=M3gxeGpyYTFma3Ax"
            className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 duration-300"
          >
            Instagram
          </a>

          <a
            href="https://github.com/Aditya-code-2"
            className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 duration-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/aditya-kumar-aa3256253"
            className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 duration-300"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;