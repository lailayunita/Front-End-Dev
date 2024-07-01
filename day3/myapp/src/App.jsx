import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Landing from "./pages/Landing";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<About />} path="/about" />
        <Route element={<Landing />} path="/landing" />
      </Routes>
    </>
  );
}

export default App;
