import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";

const contentStyle = {
  marginLeft: "400px",
  marginTop: "330px",
  height: "250px",
  width: "400px",
};
const contentStyle1 = {
  marginLeft: "200px",
  height: "250px",
  width: "400px",
  marginTop: "100px",
};

const Images = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div>
      <Image
        style={contentStyle1}
        data-aos="flip-up"
        src="https://www.dheya.com/wp-content/uploads/2021/01/college-student-career-counselling-600x310.png"
        alt="img"
      />
      <Image
        style={contentStyle}
        data-aos="flip-right"
        src="https://www.univariety.com/app/themes/uni_new/images/home_header_mimg.png"
        alt="img"
      />
    </div>
  );
};

export default Images;