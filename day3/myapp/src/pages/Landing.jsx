import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Project from "../components/Project";
import Skills from "../components/Skills";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Profile />
      <Project />
      <Skills />
      <Footer />
    </>
  );
};

export default Landing;
