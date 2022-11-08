import React, { useState } from "react";
import BMI from "./Calculators/BMI";
import CalorieCounter from "./Calculators/Calorie_Counter";
import running from "./media/Images/running.jpg";
import dumbell from "./media/Images/dumbell.jpg";
import yoga from "./media/Images/yoga.jpg";
import Testimonials from "./Testimonials";
import WhyUs from "./WhyUs";
import fila from "./media/Images/fila.png";
import north_face from "./media/Images/north_face.png";
import skechers from "./media/Images/skechers.png";
import UA from "./media/Images/UA.png";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const About = () => {
  const [active, setActive] = useState(true);
  return (
    <div>
      <div className="bg_img_div"></div>
      <WhyUs />

      <div className="specifications reveal">
        <div
          className="spec_absolute1"
          data-aos="fade-right"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
        >
          <img
            src={running}
            alt="running"
            style={{ height: "350px", width: "350px" }}
          />
        </div>
        <div
          className="spec_absolute2"
          data-aos="fade-left"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
        >
          <img
            src={dumbell}
            alt="dumbell"
            style={{ height: "350px", width: "350px" }}
          />
        </div>
        <div
          className="spec_absolute3"
          data-aos="fade-left"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
        >
          <img
            src={yoga}
            alt="yoga"
            style={{ height: "350px", width: "350px" }}
          />
        </div>
      </div>

      <div className="calc">
        <button className="btn btn-success" onClick={() => setActive(true)}>
          BMI
        </button>
        <button className="btn btn-warning" onClick={() => setActive(false)}>
          Calorie Counter
        </button>

        {active ? <BMI /> : <CalorieCounter />}
      </div>

      {/* Reviews */}
      <Testimonials />
      <br />
      <br />

      {/* Top Brands */}
      <div className="top_brands">
        <h1>TOP BRANDS</h1>
        <hr style={{ margin: "auto", width: "70px" }} />
        <div className="brand_logos">
          <div id="brand1">
            <img src={fila} alt="fila logo" />
          </div>
          <div id="brand2">
            <img src={north_face} alt="The North Face Logo" />
          </div>
          <div id="brand3">
            <img src={skechers} alt="skechers logo" />
          </div>
          <div id="brand4">
            <img src={UA} alt="Under Armour Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
