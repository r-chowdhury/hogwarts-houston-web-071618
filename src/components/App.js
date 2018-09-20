import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
//import hogs from '../porkers_data';
import HogList from "./HogList"
import Filter from "./Filter.js"

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
        <HogList />
        <Filter />

      </div>
    )
  }
}

export default App;
