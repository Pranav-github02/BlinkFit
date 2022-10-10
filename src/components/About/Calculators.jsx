import React, { useState } from "react";

const Calculators = () => {
  const [bmi, setBmi] = useState(0);
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  let [bmi_res, setBmiRes] = useState("");
  const calculateBMI = (e) => {
    e.preventDefault();
    let user_weight = weight;
    let user_height = height;
    let res = (user_weight / ((user_height * user_height) / 10000)).toFixed(2);
    setBmi(Number(res));
    console.log(typeof res);
    if (bmi < 18.5) {
      setBmiRes("You are Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setBmiRes("You have Normal BMI");
    } else {
      setBmiRes("You are Overweight");
    }
  };
  return (
    <div>
      <h1>BMI</h1>
      <br />
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Enter Height
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="height(m)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            style={{ width: "40%", margin: "auto" }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Weight
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="weight(kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            style={{ width: "40%", margin: "auto" }}
          />
        </div>
        <button
          type="submit"
          class="btn btn-outline-primary"
          onClick={calculateBMI}
        >
          Submit
        </button>
      </form>
      <div className="bmi_result">{`Your BMI is ${bmi} ${bmi_res}`}</div>
    </div>
  );
};

export default Calculators;