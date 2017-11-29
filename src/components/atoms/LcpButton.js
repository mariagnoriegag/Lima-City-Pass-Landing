import React, { Component } from 'react';
import './styles/ButtonCheckout.css';
import Arrow from '../../assets/Arrow.svg';

class LcpButtonProceedToCheckout extends Component {

    constructor(props) {
        super(props);

        this.clickEvent = this.props.onClick;
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        if (this.clickEvent) {
            this.clickEvent()
        }

    }


    render() {
        return (
            <div className='divbutton' onClick={this.onClick} style={{'display': 'inline-grid'}}>
                <div className='textbutton lateralpadding'>
                    <span>PROCEED TO CHECKOUT </span>
                    <span>  </span>
                    <span><img src={Arrow} className='arrow'></img></span>
                </div>
            </div>
        )
    }
}

export default LcpButtonProceedToCheckout