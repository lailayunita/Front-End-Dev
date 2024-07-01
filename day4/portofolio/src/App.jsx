import About from "./components/About";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
