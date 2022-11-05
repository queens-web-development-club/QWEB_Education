import Linkedin from "../img/socials/linkedin.png"
import Facebook from "../img/socials/facebook.png"
import Discord from "../img/socials/discord.png"
import Instagram from "../img/socials/instagram.png"

import "../css/footer.css"


const Footer = () => {
    return(
        <footer className="footer">
            <div className="socials">
                <a href="https://www.linkedin.com">
                    <img className="social" src={Linkedin} ></img>
                </a>
                <a href="https://www.facebook.com">
                    <img className="social" src={Facebook} ></img>
                </a>
                <a href="https://www.discord.com">
                    <img className="social" src={Discord} ></img>
                </a>
                <a href="https://www.instagram.com">
                    <img className="social" src={Instagram} ></img>
                </a>
            </div>
            <p>
                COPYRIGHT © 2023 QUEEN’S UNI VERSITY PEOPLE WATCHING CLUB
            </p>
        </footer>
    )
}

export default Footer;