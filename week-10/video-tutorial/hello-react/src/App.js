import React, { Component } from "react";
import PhotoList from "./components/PhotoList";

class App extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    handleOnChange = (e) => {

      this.setState({
        [e.target.name]: e.target.value
      })
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={this.handleOnChange}
                    placeholder="Name"
                    name='name'
                />
                <input
                    type="text"
                    onChange={this.handleOnChange}
                    placeholder="Age"
                    name='age'
                />
                <button>Submit</button>
            </div>
        );
    }
}

export default App;
