import React, { useEffect } from "react";
// import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import love from "../svg/love.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Image } from "react-bootstrap";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div>
      <footer class="p-5  text-black text-center position-relative">
        <div class="container">
          <Image
            data-aos="zoom-out-down"
            className="love"
            width={200}
            src={love}
          />
          <hr />
          <p class="lead">
            {/* <ArrowCircleUpIcon /> */}
            Copyright &copy; 2021 Hack ur Career | Rights reserved
          </p>
          <button onClick={() => window.scroll(0, 0)}>Scroll to Top</button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
