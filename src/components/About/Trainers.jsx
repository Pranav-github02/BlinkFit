import axios from "axios";
import React, { PureComponent } from "react";
import TrainersCard from "./TrainersCard";

class Trainers extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      trainers: null
    }
  }
  componentDidMount() {
    let url = `http://trainersapi-env.eba-zycsknyu.ap-northeast-1.elasticbeanstalk.com/trainers`
    axios.get(url)
      .then(response => {
        this.setState({ trainers: response.data.data })
      })
      .catch(error => console.log(error))
  }
  render() {
    let trainer = <p>Loading.....</p>
    console.log(this.state.trainers)
    if (this.state.trainers != null) {
      trainer = (
        <>
          {
            this.state.trainers.map((obj) =>
              <TrainersCard
                name={obj.name}
                image={obj.image}
                desc={obj.desc}
                age={obj.age}
                email={obj.email}
                specialisation={obj.specialisation}
                experience={obj.experience}
              />
            )
          }
        </>
      )
    }
    return (
      <div>
        {trainer}
      </div>
    )
  }
}

export default Trainers;
