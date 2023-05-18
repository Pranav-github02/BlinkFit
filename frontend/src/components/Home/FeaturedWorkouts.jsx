import axios from "axios";
import React, { PureComponent } from "react";
import "./FeaturedWorkouts.css";
import FeaturedWorkoutCard from "./FeaturedWorkoutCard";

class FeaturedWorkouts extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      featuredWorkouts: null,
    };
  }

  componentDidMount() {
    let url = `http://localhost:5000/workouts/abs`;
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        this.setState({ featuredWorkouts: response.data.abs.slice(0, 9) });
      })
      .catch((error) => console.error(error));
  }

  render() {
    let featuredWorkout = <p>Loading.....</p>;
    if (this.state.featuredWorkouts != null) {
      featuredWorkout = (
        <>
          {this.state.featuredWorkouts.map((obj) => (
            <FeaturedWorkoutCard
              key={obj.id}
              id={obj.id}
              name={obj.name}
              equipment={obj.equipment}
              gifUrl={obj.gifUrl}
            />
          ))}
        </>
      );
    }
    return (
      <div className="featured_workout">
        <h2 className="title">FEATURED WORKOUTS</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {featuredWorkout}
        </div>
      </div>
    );
  }
}

export default FeaturedWorkouts;
