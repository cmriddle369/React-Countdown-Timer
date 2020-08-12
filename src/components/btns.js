import React, { Component  } from 'react';

export default class Btns extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='btns-wrapper'>
                <button onClick={() => this.props.startCountdown()}>Start</button>

                {/* <button onClick={() => this.props.resetCountdown()}>Reset</button> */}

                {/* <button onClick={() => this.props.stopCountdown()}>Stop</button> */}
            </div>
        )
    }
}