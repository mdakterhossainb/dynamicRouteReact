import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;
