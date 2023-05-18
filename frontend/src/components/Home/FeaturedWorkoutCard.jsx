import React from "react";
import "./FeaturedWorkouts.css";

const FeaturedWorkoutCard = ({ name, equipment, gifUrl }) => {
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
            <div className="workout-button">
              <div className="add_cart"></div>
            </div>
          </div>
          <div className="workout-content">
            <div className="rating">
              <span className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span className="count">(1 review)</span>
            </div>
            <p className="title">{name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedWorkoutCard;
