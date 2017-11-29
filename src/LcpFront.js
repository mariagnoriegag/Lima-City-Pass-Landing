import { Grid, Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import LcpToolbar from './LcpToolbar';

import BackgroundImage from "./assets/limaplaza.png"

import "./styles/Front.css"

class LcpFront extends Component {

    constructor(props) {
        super(props);
        this.background = props.background;
        this.toolbarElements = [
            "WHAT INCLUDED",
            "HOW TO USE IT",
            "OTHER BENEFITS"
        ]
    }

    setBackground(background) {
        this.background = background;
    }

    render() {
        return (
            <div className="background" style={{'backgroundImage': `url(${this.background}`}}>
                <LcpToolbar elements={this.toolbarElements}/>
            </div>
        )
    }
}

export default LcpFront