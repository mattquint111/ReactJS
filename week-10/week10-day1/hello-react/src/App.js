import React, { Component } from 'react'
import SayHello from './SayHello'
import Name from './Name'

class App extends Component {
  render() {
    return (

      <div>
        <h1>Activity 1</h1>
        <Name lastName = 'Smith' firstName = 'John' />
      </div>
    
    )
  }
} 

export default App