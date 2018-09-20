import React, { Component } from 'react'
import hogs from "../porkers_data"
import Hog from "./Hog"
//import images from "../hog_imgs"

class HogList extends Component {
  constructor(){
    super()
    this.state = {
      selectedHog: null
    }
  }

  updateSelectedHog = (newHog) => {
    this.setState({selectedHog: newHog})
  }

  render () {
    return (
      <div>
      {hogs.map(hog => {
        return <Hog
          image = {require(`../hog-imgs/${hog.name.split(" ").join("_").toLowerCase()}.jpg`)}
          name={hog.name}
          specialty={hog.specialty}
          greased={hog.greased}
          weightToFridgeRatio={hog.weightToFridgeRatio}
          highestMedalAchieved={hog.highestMedalAchieved}
          handleClick={this.updateSelectedHog}
          />
      })}
      </div>
    )
  }
}

export default HogList;
