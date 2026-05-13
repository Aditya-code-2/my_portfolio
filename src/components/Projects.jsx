import project from "../assets/project.jpg";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-24 relative"
    >

      {/* Blur */}
      <div className="absolute w-[300px] h-[300px] bg-white/5 blur-[120px] rounded-full top-20 left-20"></div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-20 text-center">

          <p className="text-gray-400 uppercase tracking-[4px] mb-4">
            My Work
          </p>

          <h1 className="text-5xl md:text-6xl font-bold">
            Featured Projects
          </h1>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="group bg-white/5 border border-white/10 rounded-[30px] overflow-hidden backdrop-blur-xl hover:scale-[1.03] duration-500">

            <div className="h-[250px] overflow-hidden">

              <img
                src={project}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 duration-500"
              />

            </div>

            <div className="p-6">

              <h1 className="text-2xl font-bold">
                Modern Portfolio
              </h1>

              <p className="text-gray-400 mt-4">
                Premium portfolio website with smooth animations
                and modern UI design.
              </p>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="group bg-white/5 border border-white/10 rounded-[30px] overflow-hidden backdrop-blur-xl hover:scale-[1.03] duration-500">

            <div className="h-[250px] overflow-hidden">

              <img
                src={project2}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 duration-500"
              />

            </div>

            <div className="p-6">

              <h1 className="text-2xl font-bold">
                Scalable WhatsApp Messaging Platform
              </h1>

              <p className="text-gray-400 mt-4">
                Built for modern businesses to broadcast smarter, engage faster, and grow better on WhatsApp.(In progress..)
              </p>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="group bg-white/5 border border-white/10 rounded-[30px] overflow-hidden backdrop-blur-xl hover:scale-[1.03] duration-500">

            <div className="h-[250px] overflow-hidden">

              <img
                src={project3}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 duration-500"
              />

            </div>

            <div className="p-6">

              <h1 className="text-2xl font-bold">
                GPS Tracker 
              </h1>

              <p className="text-gray-400 mt-4">
               <p className="text-gray-400">
                Mini GPS tracker for real-time location updates and monitoring.
                </p>
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;