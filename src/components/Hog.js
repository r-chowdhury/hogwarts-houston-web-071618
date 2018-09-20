import React from 'react'
import PropTypes from 'prop-types'
import HogList from "./HogList"

const Hog = (props) => {
  

  return (
    <div>
      <h1>{props.name}</h1>
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
