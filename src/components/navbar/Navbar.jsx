import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 px-12">
      <div className="bg-teal-600 p-2.5 text-center space-x-16  text-3xl">
        <Link to={"/home"}> Home </Link>
        <Link to={"/about"}> about </Link>
        <Link to={"/contact"}> Contact </Link>
        <Link to={"/blog"}> blog </Link>
        <Link to={"/product"}> products </Link>
      </div>
    </div>
  );
};
export default Navbar;
