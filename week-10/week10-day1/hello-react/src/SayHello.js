import React, { Component } from 'react'

class SayHello extends Component {

    render() {
        return (
            <h1>This says HELLO {this.props.name}!, who is {this.props.age} years old.</h1>
        )
    }

}


export default SayHello