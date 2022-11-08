import React from "react";

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
      <div>
        <div>
          <img src={image} style={{width:"300px",height:"100%"}} alt="trainer profile img" />
        </div>
        <div>
          <h3>{name}</h3>
          <p>Fitness Instructor</p>
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
    </div>
  );
};

export default TrainersCard;
