import React, { Component } from 'react';

export class TestingGround extends Component {
    state = {
        counter: 0
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return <div>
            <h2>{this.state.counter}</h2>
            <button onClick={this.increment}>increment</button>
        </div>;
    }

}