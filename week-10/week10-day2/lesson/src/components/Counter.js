import React, { Component } from 'react'

class Counter extends Component {

    constructor() {
        super()
        this.counterValue = 0

        
        
    }

    handleIncrement = () => {
        
        console.log(this)
    }

    render() {
        return(
            <div className="counterCont">
                <h1>0</h1>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        )
    }
}

export default Counter