const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >

      <div className="max-w-6xl mx-auto text-center">

        <p className="text-gray-400 uppercase tracking-[4px] mb-4">
          Skills
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-16">
          My Tech Stack
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {[
            "Java",
            "Spring Boot",
            "Spring MVC",
            "Git & GitHub",
            "Hibernate / JPA",
            "REST APIs",
            "MYSQL",
            "React",
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-10 text-xl font-semibold hover:bg-white hover:text-black duration-300 cursor-pointer"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;