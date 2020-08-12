import React, { Component } from "react";

export default class TimerInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div className="timer-input-wrapper">
                <h3>Set your time:</h3>
                <input 
                    id="timerInput"
                    type="number" 
                    minutes={this.props.minutes}
                    onChange={this.props.handleChange}
                />
            </div>
        )
    }
}