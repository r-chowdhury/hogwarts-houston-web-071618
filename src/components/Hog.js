import React from 'react'
import PropTypes from 'prop-types'
import HogList from "./HogList"

const Hog = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={require("../hog-imgs/trouble.jpg")} />
      <ul>
        <li>Specialty: {props.specialty}</li>
        <li>Greased Status: {(props.greased === false ? "Not greased" : "greased")}</li>
        <li>How Much Heavier Compared To Fridge: {props.weightToFridgeRatio}</li>
        <li>Highest Medal Earned: {props.highestMedalAchieved}</li>
      </ul>
    </div>
  )
}

export default Hog

// this.state = {
//   name: this.props.name,
//   specialty: this.props.specialty,
//   greased: this.props.greased,
//   weightToFridgeRatio: this.props.weightToFridgeRatio,
//   highestMedalAchieved: this.props.highestMedalAchieved
// }
