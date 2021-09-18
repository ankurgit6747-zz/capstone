import React, { useEffect } from "react";
import contact from "../svg/contact.svg";
import { Image } from "react-bootstrap";
import EmailIcon from "@mui/icons-material/Email";
import ContactsIcon from "@mui/icons-material/Contacts";
import "./Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div>
      <div data-aos="zoom-in" className="col">
        <div className="row">
          <ul className="contents">
            <h4>Contact Us:</h4>
            <li>
              <b>
                <EmailIcon />
              </b>
            </li>
            <span>hackurcareer@gmail.com</span>
            <li>
              <b>
                <ContactsIcon />
              </b>
            </li>
            <span>7083368055</span>
          </ul>
        </div>
        <Image width={400} src={contact} />
        <div className="col">
          <div className="row">
            <form className="content">
              <h4>Send Msg</h4>
              <input type="text" placeholder="Enter email" required />
              <input type="text" placeholder="Enter Message" required />
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
