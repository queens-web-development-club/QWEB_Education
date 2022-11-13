import "../css/Homepage.css";
import Socials from "../components/Socials";

function ContactUs() {
  return (
    <>
      <div className="contact-us">
        <h1>CONTACT US TODAY!</h1>
        <span>AND WE'LL START MAKING CONTACT WITH YOU IMMEDIATELY</span>
        <p>1-800-666-CULT</p>
        <Socials size={110}></Socials>
      </div>
    </>
  );
}

export default ContactUs;
