import React from "react";
import BMI from "./Calculators/BMI";
import CalorieCounter from "./Calculators/Calorie_Counter";
import flexible from "./media/Images/flexible.png";
import freeshipping from "./media/Images/free-shipping.png";
import productreturn from "./media/Images/product-return.png";
import running from "./media/Images/running.jpg";
import dumbell from "./media/Images/dumbell.jpg";
import yoga from "./media/Images/yoga.jpg";
import Card from "./Card";
import fila from "./media/Images/fila.png";
import north_face from "./media/Images/north_face.png";
import skechers from "./media/Images/skechers.png";
import UA from "./media/Images/UA.png";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="bg_img_div"></div>
      <div className="about_content">
        <br />
        <br />
        <br />
        <h1>OUR STORIES</h1>
        <br />
        <hr style={{ margin: "auto", width: "70px" }} />
        <br />
        <br />
        <p>
          Ut varius tincidunt libero. Proin faucibus arcu quis ante. Sed
          consequat, leo eget bibendum sodales, augue velit cursus nunc, quis
          gravida magna mi a libero. Praesent blandit laoreet nibh. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas.
        </p>
        <br />
        <p>
          Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.
          Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
          Aenean viverra rhoncus pede. Nam commodo suscipit quam. Etiam iaculis
          nunc ac metus.
        </p>
      </div>

      <div class="container">
        <div class="row">
          <div class="col">
            <div className="div-1">
              <div>
                <img
                  src={flexible}
                  alt="flexible-payments"
                  style={{ height: "100px", width: "100px" }}
                />
              </div>
              <div>
                <p>
                  We want you to have your order as soon as possible so you
                  don't have to waste your time
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="div-2">
              <div>
                <img
                  src={freeshipping}
                  alt="freeshipping-logo"
                  style={{ height: "100px", width: "100px" }}
                />
              </div>
              <div>
                <p>
                  Need some help finding the right product? Use our contact form
                  or give us a call +31 416 652803
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="div-3">
              <div>
                <img
                  src={productreturn}
                  alt="product-return"
                  style={{ height: "100px", width: "100px" }}
                />
              </div>
              <div>
                <p>
                  At sportshop.com we have enough to choose from so you will
                  always find the right product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="specifications">
        <div className="spec_absolute1">
          <img
            src={running}
            alt="running"
            style={{ height: "350px", width: "350px" }}
          />
        </div>
        <div className="spec_absolute2">
          <img
            src={dumbell}
            alt="dumbell"
            style={{ height: "350px", width: "350px" }}
          />
        </div>
        <div className="spec_absolute3">
          <img
            src={yoga}
            alt="yoga"
            style={{ height: "350px", width: "350px" }}
          />
        </div>
      </div>

      {/* Reviews */}
      <div className="reviews">
        <h1>Reviews</h1>
        <hr style={{ margin: "auto", width: "70px" }} />
        <div
          id="carouselExampleControls"
          className="carousel carousel-dark slide"
          data-bs-touch="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card-holder">
                <Card />
                <Card />
              </div>
            </div>
            <div className="carousel-item">
              <div className="card-holder">
                <Card />
                <Card />
              </div>
            </div>
            <div className="carousel-item">
              <div className="card-holder">
                <Card />
                <Card />
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
            style={{ width: "5%" }}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
            style={{ width: "5%" }}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
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
