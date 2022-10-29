import React, { useState } from "react";

const Calorie_Counter = () => {
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [gender, setGender] = useState("");
  const [exerciseType, setExerciseType] = useState(0);
  var [totalCalories, setTotalCalories] = useState(0);

  const handleSelectTag = (e) => {
    setExerciseType(e.target.value);
  };

  const handleGender1 = () => {
    setGender("male");
  };

  const handleGender2 = () => {
    setGender("female");
  };

  const getResult = (e) => {
    e.preventDefault();
    if (age === "" || weight === "" || height === "" || 80 < age || age < 15) {
      console.log("Please make sure the values you entered are correct");
    } else if (gender === "male" && exerciseType === "1") {
      setTotalCalories(
        1.2 *
          (66.5 +
            13.75 * parseFloat(weight) +
            5.003 * parseFloat(height) -
            6.755 * parseFloat(age))
      );
    } else if (gender === "male" && exerciseType === "2") {
      setTotalCalories(
        1.375 *
          (66.5 +
            13.75 * parseFloat(weight) +
            5.003 * parseFloat(height) -
            6.755 * parseFloat(age))
      );
    } else if (gender.id === "male" && exerciseType === "3") {
      setTotalCalories(
        1.55 *
          (66.5 +
            13.75 * parseFloat(weight) +
            5.003 * parseFloat(height) -
            6.755 * parseFloat(age))
      );
    } else if (gender === "male" && exerciseType === "4") {
      setTotalCalories(
        1.725 *
          (66.5 +
            13.75 * parseFloat(weight) +
            5.003 * parseFloat(height) -
            6.755 * parseFloat(age))
      );
    } else if (gender.id === "male" && exerciseType === "5") {
      setTotalCalories(
        1.9 *
          (66.5 +
            13.75 * parseFloat(weight) +
            5.003 * parseFloat(height) -
            6.755 * parseFloat(age))
      );
    } else if (gender.id === "female" && exerciseType === "1") {
      setTotalCalories(
        1.2 *
          (655 +
            9.563 * parseFloat(weight) +
            1.85 * parseFloat(height) -
            4.676 * parseFloat(age))
      );
    } else if (gender.id === "female" && exerciseType === "2") {
      setTotalCalories(
        1.375 *
          (655 +
            9.563 * parseFloat(weight) +
            1.85 * parseFloat(height) -
            4.676 * parseFloat(age))
      );
    } else if (gender.id === "female" && exerciseType === "3") {
      setTotalCalories(
        1.55 *
          (655 +
            9.563 * parseFloat(weight) +
            1.85 * parseFloat(height) -
            4.676 * parseFloat(age))
      );
    } else if (gender.id === "female" && exerciseType === "4") {
      setTotalCalories(
        1.725 *
          (655 +
            9.563 * parseFloat(weight) +
            1.85 * parseFloat(height) -
            4.676 * parseFloat(age))
      );
    } else {
      setTotalCalories(
        1.9 *
          (655 +
            9.563 * parseFloat(weight) +
            1.85 * parseFloat(height) -
            4.676 * parseFloat(age))
      );
    }
  };

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mx-auto">
            <div class="card card-body text-center mt-5">
              <h1 class="heading display-5 pb-3">Calorie Calculator</h1>
              <form id="calorie-form">
                <div class="form-group row">
                  <label for="age" class="col-sm-2 col-form-label">
                    Age
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="number"
                      class="form-control"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="Ages 15-80"
                    />
                  </div>
                </div>

                <fieldset class="form-group">
                  <div class="row">
                    <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                    <div class="col-sm-10" id="form-radio">
                      <div class="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          id="male"
                          name="customRadioInline1"
                          class="custom-control-input"
                          onChange={handleGender1}
                        />
                        <label class="custom-control-label" for="male">
                          Male
                        </label>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          id="female"
                          name="customRadioInline1"
                          class="custom-control-input"
                          onChange={handleGender2}
                        />
                        <label class="custom-control-label" for="female">
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>

                <div class="form-group row">
                  <label for="weight" class="col-sm-2 col-form-label">
                    Weight
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="number"
                      class="form-control"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="In kilograms"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="height" class="col-sm-2 col-form-label">
                    Height
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="number"
                      class="form-control"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="In centimeters"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <legend class="col-form-label col-sm-2 pt-0">Activity</legend>
                  <select
                    class="custom-select col-sm-10"
                    id="list"
                    onChange={handleSelectTag}
                  >
                    <option selected value="1">
                      Sedentary (little or no exercise)
                    </option>
                    <option value="2">
                      Lightly active (light exercise/sports 1-3 days/week)
                    </option>
                    <option value="3">
                      Moderately active (moderate exercise/sports 3-5 days/week)
                    </option>
                    <option value="4">
                      Very active (hard exercise/sports 6-7 days a week)
                    </option>
                    <option value="5">
                      Extra active (very hard exercise/sports & physical job or
                      2x training)
                    </option>
                  </select>
                </div>

                <div class="form-group">
                  <input
                    type="submit"
                    value="Calculate"
                    class="btn btn-dark btn-block"
                    onClick={getResult}
                  />
                </div>
              </form>

              <div id="loading">
                <img src="./img/Loading.gif" alt="" />
              </div>

              <div id="results" class="pt-4">
                <h5>Total Calories</h5>
                <div class="form-group">
                  <div class="input-group">
                    <input
                      type="number"
                      class="form-control"
                      id="total-calories"
                      disabled
                      value={totalCalories}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calorie_Counter;
