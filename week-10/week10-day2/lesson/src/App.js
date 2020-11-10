import React, { Component } from 'react'
import './App.css'
import Counter from './components/Counter'
import Stepper from './components/Stepper'

class App extends Component {
  render() {
    return (
      <div className="mainCont">
        <h1>Activity 1</h1>
        <Stepper />

      </div>

    )
  }
}

export default App