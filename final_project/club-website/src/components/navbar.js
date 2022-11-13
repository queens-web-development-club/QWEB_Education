import react, { useState, useEffect } from "react";
import "../css/navbar.css";
import Binoculars from "../img/binoculars.png";
import Cart from "../img/shop/cart_icon.png";

const Navbar = () => {
  const originalIsMobile = window.innerWidth < 800;
  const [isMobile, setIsMobile] = useState(originalIsMobile);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if(isMobile === false){
    console.log(isMobile)
    return (
      <div className="centered-div">
        <nav className="navbar">
          <a href="/">
            <img className="navbar-img" src={Binoculars} />
          </a>
          <div className="nav-links">
            <a className="nav-link" href="/about">
              About Us
            </a>
            <a className="nav-link" href="/shop">
              Shop
            </a>
            <a className="nav-link" href="/upcoming-events">
              Upcoming Events
            </a>
            <a className="nav-link" href="/past-events">
              Past Events
            </a>
            <a className="nav-link" href="/contact">
              Contact Us
            </a>
          </div>
          <a href="/shop/cart">
            <img className="navbar-img2" src={Cart} />
          </a>
        </nav>
      </div>
    );
  } else if(isMobile === true){
    return (
      <div className="centered-div">
        <nav className="navbar">
          <a href="/">
            <img className="navbar-img" src={Binoculars} />
          </a>
          <div className="nav-links">
            {/* TODO: Make the mobile nav dropdown menu for the navbar here */}
            <a className="nav-link" href="/about">
              Link Dropdown
            </a>
          </div>
        </nav>
      </div>
    );
  }

  
};

export default Navbar;
