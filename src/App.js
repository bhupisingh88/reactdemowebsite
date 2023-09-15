import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import Footer from "./Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
              <Route exact path="/service" element={<Service />}></Route> 
              <Route path="*" element={<Home />}></Route>
            </Routes>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
