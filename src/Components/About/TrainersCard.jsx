import React from "react";
import "./TrainersCard.css";

const TrainersCard = ({
  name,
  image,
  desc,
  age,
  email,
  specialisation,
  experience,
}) => {
  return (
    <div>
      <div
        className="outer_div"
        data-aos="fade-up"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
      >
        <div>
          <img
            src={image}
            style={{ width: "300px", height: "100%" }}
            alt="trainer profile img"
          />
        </div>
        <div className="trainer_details">
          <h3>{name}</h3>
          <p>Fitness Instructor</p>
          <div className="socialmediaicons">
            <a href="www.facebook.com">
              <i class="fa-brands fa-2xl fa-facebook"></i>
            </a>
            &nbsp;&nbsp;
            <a href="www.instagram.com">
              <i class="fa-brands fa-2xl fa-instagram"></i>
            </a>
            &nbsp;&nbsp;
            <a href="www.twitter.com">
              <i class="fa-brands fa-2xl fa-twitter"></i>
            </a>
            &nbsp;&nbsp;
            <a href="www.youtube.com">
              <i class="fa-brands fa-2xl fa-youtube"></i>
            </a>
            &nbsp;&nbsp;
          </div>
          <p></p>
          <p>{desc}</p>
          <table class="table">
            <tbody>
              <tr>
                <td>Age</td>
                <td>{age}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>Specialisations</td>
                <td>{specialisation}</td>
              </tr>
              <tr>
                <td>Experience</td>
                <td>{experience}</td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-danger">More Details</button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default TrainersCard;
