import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="bg-slate-500">
      <div className="container mx-auto flex justify-between p-4">
        <h1>Logo</h1>
        <p className="hidden md:block">Profile</p>
        <div className="md:hidden">
          <HiMenu size="20px" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
