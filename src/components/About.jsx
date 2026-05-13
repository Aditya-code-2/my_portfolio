import profile from "../assets/profile.png";
const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 relative"
    >

      {/* Blur Effect */}
      <div className="absolute w-[300px] h-[300px] bg-white/5 blur-[120px] rounded-full bottom-10 right-10"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE IMAGE */}
        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 bg-white/10 blur-3xl rounded-[40px]"></div>

            <div className="relative w-[320px] h-[525px] rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">

              <img
                src={profile}
                alt=""
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div>

          <p className="text-gray-400 uppercase tracking-[4px] mb-4">
            About Me
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Backend Dev <br />
           with Commit Issues 
          </h1>

          <p className="text-gray-400 mt-8 leading-relaxed text-lg">
             Convincing Spring Boot bugs to disappear since day one  <br />
             APIs clean enough to make frontend devs emotional .
          </p>

          <p className="text-gray-400 mt-6 leading-relaxed text-lg">
           Making servers & databases fall for each other  <br />
             Building smooth Spring Boot systems with zero toxic relationships
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 mt-10">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <h1 className="text-3xl font-bold">
            Loading..
              </h1>
              <p className="text-gray-400 mt-2">
                Years Experience
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <h1 className="text-3xl font-bold">
                2+
              </h1>
              <p className="text-gray-400 mt-2">
                Projects
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <h1 className="text-3xl font-bold">
              Unlocked
              </h1>
              <p className="text-gray-400 mt-2">
                Creativity
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;