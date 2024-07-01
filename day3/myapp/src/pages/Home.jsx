import Jumbotron from "../components/Jumbotron";
import { Link, useNavigate } from "react-router-dom";

// biasakan penamaan Function sesuai dengan nama filenya.
const Home = () => {
  // return cuma bisa element -> kalo mau banyak harus dibungkus <div> atau <>
  const nama = "Budi";
  const navigate = useNavigate();

  return (
    <>
      <h1>Home</h1>
      <Jumbotron orang={nama} />

      <Link to="/about">About</Link>
      <button onClick={() => navigate("/profile")}>Profile</button>
    </>
  );
};

export default Home;
