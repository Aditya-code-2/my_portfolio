import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <main className="bg-[#0a0a0a] text-white overflow-hidden">

      <Navbar />

      <Hero />

      <About />

      <Projects />

      <Skills />

      <Contact />

    </main>
  );
};

export default App;