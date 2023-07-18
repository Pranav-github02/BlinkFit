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

  async componentDidMount() {
    const options = {
      method: "GET",
      url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest",
      headers: {
        "X-RapidAPI-Key": "698e3c62abmshf3cd4f832f5e9ecp19d546jsna529f23ed0a9",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      this.setState({ featuredWorkouts: response.data.slice(0, 9) });
    } catch (error) {
      console.error(error);
    }
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
