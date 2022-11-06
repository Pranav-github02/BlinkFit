import React from "react";
// import trainers from "./media/Images/trainers.jfif";

const Trainers = () => {
  let trainerId = [];
  let trainerDetail = [];
  const getData = async () => {
    const limit = 35;
    var myHeaders = new Headers();
    myHeaders.append("apikey", "94q8geC7iTMoTIy51iVTKQzX1EnP548G");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    const data = await fetch(
      `https://api.apilayer.com/hyperhuman/trainers/trending?limit=${limit}`,
      requestOptions
    );
    const jsonData = await data.json();
    console.log(jsonData);

    jsonData.data.forEach((obj) => {
      trainerId.push(obj.id);
    });
    console.log(trainerId);
  };

  const getDetails = async () => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "94q8geC7iTMoTIy51iVTKQzX1EnP548G");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    trainerId.map(async (id) => {
      const trainerdetails = await fetch(
        `https://api.apilayer.com/hyperhuman/trainers/${id}`,
        requestOptions
      );
      const jsonTrainerDetails = await trainerdetails.json();
      if (
        jsonTrainerDetails.data.description !== null &&
        jsonTrainerDetails.data.email !== null &&
        jsonTrainerDetails.data.name !== null &&
        jsonTrainerDetails.data.profileImage.url !== null &&
        jsonTrainerDetails.data.specialisations !== null
      ) {
        trainerDetail.push(jsonTrainerDetails);
      }
    });
    console.log(trainerDetail);
  };
  return (
    <div>
      <button className="btn btn-success" onClick={getData}>
        Fetch Data
      </button>
      <button className="btn btn-danger" onClick={getDetails}>
        Fetch Details
      </button>
    </div>
  );
};

export default Trainers;
