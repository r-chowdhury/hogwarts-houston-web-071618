import React from 'react'
//import HogList from "./HogList"

const Hog = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.image} alt="hog-pic" onClick={(e) => props.handleClick(props.name)}/>
    </div>
  )
}



// const pictureClick = (e, props) => {
  (this.props.  == }
//   return (
//     <div>
//       <ul id="hog-details">
//         <li>Specialty: {props.specialty}</li>
//         <li>Slippery Status: {(props.greased === false ? "Not greased" : "greased")}</li>
//         <li>How Much Heavier Compared To Fridge: {props.weightToFridgeRatio}</li>
//         <li>Highest Medal Earned: {props.highestMedalAchieved}</li>
//       </ul>
//     </div>
//   )
// }

export default Hog