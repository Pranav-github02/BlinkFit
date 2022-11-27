import React from "react";
import "./About.css";
import gamer from "./media/Images/gamer.png";

const Card = () => {
  return (
    <div className="card">
      <p> ⭐⭐⭐⭐ </p>
      <h2>Makes Me Happy</h2>
      <p>
        "Wonderful Communication and your company even sent a generous amount of
        samples to me , making my decision to spend money on an internet item
        ...
      </p>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <img
          src={gamer}
          alt="user_id_img"
          style={{ height: "6em", width: "6em" }}
        />
        <p>
          ANN SMITH
          <br />
          Photographer
        </p>
      </div>
    </div>
  );
};

export default Card;
