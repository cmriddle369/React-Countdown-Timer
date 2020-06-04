import React, { Component  } from 'react';

export default class StartBtn extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='start-btn-wrapper'>
                    <button 
                        onClick={this.props.startCountdown}
                        >
                            Start
                    </button>
            </div>
        )
    }
}