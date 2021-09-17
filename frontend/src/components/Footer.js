import React from "react";
import "./Footer.css";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="row">
        <div className="col">
          <ul className="contents">
            <li>About Us :</li>
            <p>career guidance.....</p>
          </ul>
        </div>
        <div className="col">
          <h4>Contact us :</h4>
          <li className="icons">
            <b>
              <MailIcon />
            </b>
            &nbsp; &nbsp;
            <span>HackurCareer@gmail.com</span>
          </li>

          <li className="icons">
            <b>
              <PhoneIcon />
            </b>
            &nbsp; &nbsp; <span>917083368055</span>
          </li>
        </div>

        <div className="col">
          <ul className="contents">
            <li>FAQs</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <h5 className="col-sm">
          Hack Your Career | &copy;{new Date().getFullYear()} All Rights
          reserved
        </h5>
      </div>
    </div>
  );
};

export default Footer;
