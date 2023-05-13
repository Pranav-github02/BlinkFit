import React from "react";
// import { useState } from "react";
import "./FeaturedWorkouts.css";

const FeaturedWorkoutCard = ({ gifUrl, id, name, target }) => {
  return (
    <>
      <div className="featuredworkout">
        <div className="workout">
          <div>
            <img
              src={gifUrl}
              style={{ width: "350px", height: "450px" }}
              alt={name}
            />
            <div className="wishlist" data-title="Wishlist">
              <button>
                {/* Add to Wishlist */}
                <i className="fa-solid fa-heart"></i>
              </button>
            </div>
            <div className="product-button">
              <div className="add_cart"></div>
              <div className="quick-view">
                <a
                  type="button"
                  href="#Modal"
                  data-bs-toggle="modal"
                  data-bs-target="#Modal"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="product-content">
            <div className="rating">
              <span className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span className="count">(1 review)</span>
            </div>
            <p className="title">{target}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedWorkoutCard;
