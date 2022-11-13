import Linkedin from "../img/socials/linkedin.png";
import Facebook from "../img/socials/facebook.png";
import Discord from "../img/socials/discord.png";
import Instagram from "../img/socials/instagram.png";
import Socials from "./Socials";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <Socials size={50}></Socials>
      </div>
      <p>COPYRIGHT &#169; 2023 QUEEN'S UNI VERSITY PEOPLE WATCHING CLUB</p>
    </footer>
  );
};

export default Footer;
