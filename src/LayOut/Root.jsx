import { Outlet } from "react-router-dom";
import Nav from "../Pages/NavBar/Nav";
import Footer from "../Pages/Footer/Footer";

const Root = () => {
  return (
    <div className="font-poppins">
      <Nav />
      <div className="">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
