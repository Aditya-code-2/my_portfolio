import { motion } from "framer-motion";

const skills = [
  "Java",
  "Spring Boot",
  "Spring MVC",
  "Git & GitHub",
  "Hibernate / JPA",
  "REST APIs",
  "MYSQL",
  "React",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-5 sm:px-10 py-24 relative overflow-hidden"
    >

      {/* BLUR EFFECT */}
      <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-white/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-20"
        >

          <p className="text-gray-400 uppercase tracking-[6px] text-sm mb-5">
            Skills
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">

            My Tech Stack

          </h1>

        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + index * 0.1 }}
              whileHover={{
                scale: 1.05,
              }}
              className="group bg-white/5 border border-white/10 rounded-[28px] p-8 sm:p-10 backdrop-blur-xl hover:bg-white hover:text-black duration-300 cursor-pointer shadow-lg"
            >

              <h1 className="text-lg sm:text-xl font-semibold">

                {skill}

              </h1>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;