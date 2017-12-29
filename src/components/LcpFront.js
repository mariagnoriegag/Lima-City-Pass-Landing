 import { Grid, Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import LcpToolbar from './LcpToolbar';
import LcpLogo from './LcpLogo';
//import { Grid, Row, Col } from 'react-material-responsive-grid';


import "../styles/Front.css"

import LcpLogoImage from '../assets/limalogowhite.png';
 import {Events, scrollSpy} from "react-scroll/modules/index";

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

    updateDimensions() {
        this.setState({
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth
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
        let fixedLogoClass = ['logofront'];
        let heightLogo = this.state.windowHeight * 0.5 - this.state.scrollPosition*0.95;
        if(this.state.scrollPosition > 320) {
            fixedLogoClass.push('fix');
            heightLogo = 60.95;
        } else {
            heightLogo = this.state.windowHeight * 0.5 - this.state.scrollPosition*0.95;
        }
        if (this.state.scrollPosition > (this.state.windowHeight-30)) {
            fixedLogoClass.push('delete');
        }
        return (
            <div>
                <div className="background" style={{'backgroundImage': `url(${this.background}`}}>
                    <div style={{'position': 'fixed', 'width': '100%', 'z-index':'2'}}>
                        <LcpToolbar elements={this.toolbarElements} />
                    </div>
                    <div className={fixedLogoClass.join(' ')}>
                        <div className='centerblock'>
                            <img src={this.logo} style={{'height': heightLogo}}/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default LcpFront;