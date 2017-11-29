// import { Grid, Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import LcpToolbar from './LcpToolbar';
import LcpLogo from './LcpLogo';


import "../styles/Front.css"

import LcpLogoImage from '../assets/limalogowhite.png'

class LcpFront extends Component {

    constructor(props) {
        super(props);
        this.background = props.background;
        this.logo = props.logo;
        this.toolbarElements = props.toolbarElements;
        this.state = {
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth,
            scrollPosition: window.scrollY
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    };

    updateDimensions(e) {
        this.setState({
            windowHeight: (window.innerHeight),
            windowWidth: (window.innerWidth)
        });
    }

    componentDidMount () {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener("resize", this.updateDimensions);
    };

    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener("resize", this.updateDimensions);
    };

    handleScroll () {
        this.setState({
            scrollPosition: window.scrollY,
        });
    };

    render() {
        return (
            <div id='lcp'>
                <div className="background" style={{'backgroundImage': `url(${this.background}`}}>
                    <LcpToolbar elements={this.toolbarElements}/>
                    <img src={this.logo} style={{'height': (this.state.windowHeight*0.5 - this.state.scrollPosition)}}/>
                </div>

            </div>


        )
    }
}

export default LcpFront;