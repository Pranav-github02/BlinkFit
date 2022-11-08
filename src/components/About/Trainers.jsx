import React, { useState, useEffect } from "react";
import TrainersCard from "./TrainersCard";

const Trainers = () => {
  const [data, setData] = useState([]);
  // API call
  let cnt = 1;
  useEffect(() => {
    if (cnt <= 1) {
      const callApi = async () => {
        const url = await fetch(
          "http://trainersapi-env.eba-zycsknyu.ap-northeast-1.elasticbeanstalk.com/trainers"
        );
        const jsonData = await url.json();
        console.log(jsonData);
        setData((data) => [...data, jsonData]);
      };
      callApi();
    }
  }, []);
  console.log(data);
  return (
    <div>
      {data.map((obj) => {
        return (
          <TrainersCard
            name={obj.name}
            image={obj.image}
            desc={obj.desc}
            age={obj.age}
            email={obj.email}
            specialisation={obj.specialisation}
            experience={obj.experience}
          />
        );
      })}
    </div>
  );
};

export default Trainers;
