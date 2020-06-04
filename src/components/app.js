import React, { Component  } from 'react';

import StartBtn from "./timer-start-btn";
import Timer from "./timer";
import TimerInput from "./timer-input";

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      minutes: "00",
      seconds: "00"
    }

    this.secondsRemaining;
    this.intervalHandle;
    this.handleChange = this.handleChange.bind(this);
    this.startCountdown = this.startCountdown.bind(this);
    this.counter = this.counter.bind(this);
  }

  handleChange(event) {
    this.setState({
      minutes: event.target.value
    })
  }

  counter() {
    let min = Math.floor(this.secondsRemaining / 60);
    let sec = this.secondsRemaining - (min * 60);

    this.setState({
      minutes: min,
      seconds: sec
    })

    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds
      })
    }

    if (min < 10) {
      this.setState({
        minutes: "0" + this.state.minutes
      })
    }

    if (min === 0 && sec === 0) {
      clearInterval(this.intervalHandle);
    }

    this.secondsRemaining--;
  }

  startCountdown() {
    this.intervalHandle = setInterval(this.counter, 1000);

    let time = this.state.minutes;

    this.secondsRemaining = time * 60;
}

  render() {
    return (
      <div className='app-wrapper'>
        <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
        <TimerInput minutes={this.state.minutes} handleChange={this.handleChange} />
        <StartBtn startCountdown={this.startCountdown} minutes={this.state.minutes} />
      </div>
      )
    }
  }