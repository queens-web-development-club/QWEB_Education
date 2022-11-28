import "../css/Homepage.css";
import Socials from "../components/Socials";
import { useState } from "react";

function ContactUs() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
      e.preventDefault();

      setIsLoading(true)

      const response = await fetch("http://localhost:3001/contact", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              email,
              name,
              message,
          }),
      });
      if (response.status === 204) {
          alert("Message sent!");
      } else {
          alert("Error sending message");
      }

      setIsLoading(false)
  };

  return (
    <>
      <div className="contact-us">
        <h1>CONTACT US TODAY!</h1>
        <span>AND WE'LL START MAKING CONTACT WITH YOU IMMEDIATELY</span>
        <div>
            <form className={"contact-us__form"} onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor={"name"}>Name</label>
                    </div>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={e => setName(e.currentTarget.value)}
                    />
                </div>

                <div>
                    <div>
                        <label htmlFor={"email"}>Email</label>
                    </div>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.currentTarget.value)}
                    />
                </div>

                <div>
                    <div>
                        <label htmlFor={"message"}>Message</label>
                    </div>
                    <textarea
                        maxLength={300}
                        name="message"
                        value={message}
                        required={true}
                        onChange={e => setMessage(e.currentTarget.value)}
                    />
                </div>

                <button type={"submit"} disabled={isLoading}>{isLoading ? "Loading..." : "Send"}</button>
            </form>
        </div>
        <Socials size={110}></Socials>
      </div>
    </>
  );
}

export default ContactUs;
