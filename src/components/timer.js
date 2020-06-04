import React, { Component  } from 'react';

export default class Timer extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div className='timer-wrapper'>
               <h1>{this.props.minutes} : {this.props.seconds}</h1> 
            </div>
        )
    }
}