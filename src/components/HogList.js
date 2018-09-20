import React, { Component } from 'react'
import PropTypes from 'prop-types'
import hogs from "../porkers_data"
import Hog from "./Hog"

class HogList extends Component {
  constructor(){
    super()
  }
  render () {
    return (
      <div>
      {hogs.map((hog) => {
        return <Hog name={hog.name}
          specialty={hog.specialty}
          greased={hog.greased}
          weightToFridgeRatio={hog.weightToFridgeRatio}
          />
      })}
      </div>
    )
  }
}

export default HogList;
