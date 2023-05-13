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
            src="https://drive.google.com/file/d/1SFnP_hnXCCDPR1ruFfnnXZkv_DaJAgxJ/view?usp=share_link"
            style={{ width: "300px", height: "100%" }}
            alt="trainer profile img"
          />
        </div>
        <div className="trainer_details">
          <h3>{name}</h3>
          <p>Fitness Instructor</p>
          <div className="socialmediaicons">
            <a href="https://www.facebook.com">
              <i className="fa-brands fa-xl fa-facebook text-primary"></i>
            </a>
            &nbsp;&nbsp;
            <a href="https://www.instagram.com">
              <i className="fa-brands fa-xl fa-instagram" style={{ color: "#d63384" }}></i>
            </a>
            &nbsp;&nbsp;
            <a href="https://www.twitter.com">
              <i className="fa-brands fa-xl fa-twitter text-primary"></i>
            </a>
            &nbsp;&nbsp;
            <a href="https://www.youtube.com">
              <i className="fa-brands fa-xl fa-youtube text-danger"></i>
            </a>
            &nbsp;&nbsp;
          </div>
          <p></p>
          <p>{desc}</p>
          <table className="table">
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
