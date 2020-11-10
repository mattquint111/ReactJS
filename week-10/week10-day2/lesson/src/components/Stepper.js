import React, { Component } from 'react'

class Stepper extends Component {

    constructor() {
        super()

        this.state = {
            counter: 0
        }
    }

    decreaseStep = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    increaseStep = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    
    render() {
        return(
            <div className="stepCont">
                <button className="counterBtn decrease" onClick={this.decreaseStep}>-</button>
                <span className="counterStep">{this.state.counter}</span>
                <button className="counterBtn increase" onClick={this.increaseStep}>+</button>
            </div>
        )
    }
}

export default Stepper