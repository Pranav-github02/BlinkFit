import React from "react";
import './shop.css'
import Content from "./Content";

const Shop = () => {
  return (
    <div className="shop">
      <div className="banner page-title">
        <div className="container">
          <div className="title-heading">
            <h1>SHOP</h1>
          </div>
          <div className="sub-catg">
            <div className="content">
              <ul>
                <li>
                  <a href=""><i className="fa-thin fa-shirt"></i></a>
                  <h2>clothing</h2>
                </li>
                <li>
                  <a href=""><i className="fa-thin fa-boxing-glove"></i></a>
                  <h2>accessories</h2>
                </li>
                <li>
                  <a href=""><i className="fa-thin fa-boot"></i></a>
                  <h2>footwear</h2>
                </li>
                <li>
                  <a href=""><i className="fa-thin fa-dumbbell"></i></a>
                  <h2>equipment</h2>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Content />
    </div>
  );
};

export default Shop;
