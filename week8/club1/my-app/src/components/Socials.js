import Linkedin from "../img/socials/linkedin.png";
import Facebook from "../img/socials/facebook.png";
import Discord from "../img/socials/discord.png";
import Instagram from "../img/socials/instagram.png";
import "../css/socials.css";

const Socials = (props) => {
  let size = props.size + "px";
  return (
    <div className="socials">
      <a href="https://www.linkedin.com">
        <img className="social" src={Linkedin} style={{width:size}} ></img>
      </a>
      <a href="https://www.facebook.com">
        <img className="social" src={Facebook} style={{width:size}} ></img>
      </a>
      <a href="https://www.discord.com">
        <img className="social" src={Discord} style={{width:size}} ></img>
      </a>
      <a href="https://www.instagram.com">
        <img className="social" src={Instagram} style={{width:size}} ></img>
      </a>
    </div>
  );
};

export default Socials;
