import React, { Component } from 'react'

class Counter extends Component {

    constructor() {
        super()
        // this.counterValue = 0

        // STATE
        // any time state is updated -> render() is called
        this.state = {
            counter: 0,
        }
    }

    handleIncrement = () => {
        // update state & increment counter
        // don't just update state -> create new state object
        // setState is an async operation
        this.setState({
            counter: this.state.counter + 1
        },() => {
            // second optional arg, fired after state is updated
            console.log(this.state.counter)
        })
    }

    render() {

        return(
            <div className="counterCont">
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        )
    }
}

export default Counter