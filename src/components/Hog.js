import React from 'react'
//import HogList from "./HogList"

const Hog = (props) => {
  if (props.name === props.selectedHog){
    return (
      <div>
      <h1>{props.name}</h1>
      <img src={props.image} alt="hog-pic" onClick={(e) => props.handleClick(props.name)}/>
      <ul id="hog-details">
        <li>Specialty: {props.specialty}</li>
        <li>Slippery Status: {(props.greased === false ? "Not greased" : "greased")}</li>
        <li>How Much Heavier Compared To Fridge: {props.weightToFridgeRatio}</li>
        <li>Highest Medal Earned: {props.highestMedalAchieved}</li>
      </ul>
    </div>
  )} else {
    return (
      <div>
        <h1>{props.name}</h1>
        <img src={props.image} alt="hog-pic" onClick={(e) => props.handleClick(props.name)}/>
      </div>
    )
  }
}

export default Hog
