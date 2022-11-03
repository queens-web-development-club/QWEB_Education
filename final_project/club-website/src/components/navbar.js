import react from "react";
import "../css/navbar.css"
import Binoculars from "../img/binoculars.png"


const Navbar = () => {
    return (
        <div className="centered-div" >
            <nav className="navbar">
                <a href="/">
                    <img className="navbar-img" src={Binoculars} />
                </a>
                <div className="nav-links">
                    <a className="nav-link" href="/about">About Us</a>
                    <a className="nav-link" href="/shop">Shop</a>
                    <a className="nav-link" href="/upcoming-events">Upcoming Events</a>
                    <a className="nav-link" href="/past-events">Past Events</a>
                    <a className="nav-link" href="/contact">Contact Us</a>
                </div>
            </nav>
        </div>
        
    );
}

export default Navbar;