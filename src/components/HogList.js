import React, { Component } from 'react'
import PropTypes from 'prop-types'
import hogs from "../porkers_data"
import Hog from "./Hog"
import images from "../hog-imgs/hog_image_object"

class HogList extends Component {
  constructor(){
    super()
  }
  render () {
    return (
      <div>
      {hogs.map(hog => {
        return <Hog
          image = {require("../hog-imgs/{hog.name}.jpg")}
          name={hog.name}
          specialty={hog.specialty}
          greased={hog.greased}
          weightToFridgeRatio={hog.weightToFridgeRatio}
          highestMedalAchieved={hog.highestMedalAchieved}
          />
      })}
      </div>
    )
  }
}

export default HogList;
