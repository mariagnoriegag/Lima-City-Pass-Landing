import {  Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import Signin from '../assets/signin.svg'
import FloatSignin from '../assets/floatsignin.svg'
import BuyNowButton from '../components/LcpBuyNowButton'

import "../styles/Toolbar.css"
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class LcpToolbar extends Component {
    constructor(props) {
        super(props);
        this.elements = props.elements;
        this.state = { action: 0 };
    }
    componentDidMount() {

        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();

    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    render(){
        return (
            <div className='sticky'>
            <Row className="lcp-toolbar">
                <Col xs={12} sm={12} md={12} lg={12}>
                    <Row>
                        {this.elements.map( item => (
                                <Col key={item}
                                     lg={6/this.elements.length}
                                     md={6/this.elements.length}
                                     sm={6/this.elements.length}
                                     xs={6/this.elements.length}>
                                    <Link className="shortcut-toolbar" to={item.to} spy={true} smooth={true} delay={0} duration={800}>{item.title}</Link>
                                </Col>
                        ))}
                        <Col xsOffset={1} smOffset={2} mdOffset={2} lgOffset={3} lg={2} md={2}>
                            <div style={{'margin':'-6.5%'}} className=''>
                                <BuyNowButton name={'BUY NOW'}/>
                            </div>
                        </Col>
                        <Col lg={1} md={2} xs={2} sm={2}>
                            <div className='signin' style={{'backgroundImage': `url(${Signin}`}}>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </div>
        )
    }
}

export default LcpToolbar