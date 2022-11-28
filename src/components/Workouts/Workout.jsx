import React, { PureComponent } from "react";
import axios from "axios";

class Workout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      apiData: null,
      workouts: null,
    };
  }
  componentDidMount() {
    let url = `https://exercisedb.p.rapidapi.com/exercises`;
    let options = {
      headers: {
        "X-RapidAPI-Key": "698e3c62abmshf3cd4f832f5e9ecp19d546jsna529f23ed0a9",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };
    axios
      .get(url, options)
      .then((response) => {
        this.setState({ apiData: response.data });
      })
      .catch((error) => console.log(error));

    // for (let i = 0; i < 100; i++) {
    //   this.setState({ workouts: this.state.apiData[i] });
    // }
  }

  render() {
    console.log(this.state.apiData);
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default Workout;
