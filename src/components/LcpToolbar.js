import {  Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import Signin from '../assets/signin.svg'
import FloatSignin from '../assets/floatsignin.svg'
import BuyNowButton from '../components/LcpBuyNowButton'

import "../styles/Toolbar.css"

class LcpToolbar extends Component {
    constructor(props) {
        super(props);
        this.elements = props.elements;
        this.state = { action: 0 };
    }

    render(){
        return (
            <Row className="lcp-toolbar">
                <Col xs={12} sm={12} md={12} lg={12}>
                    <Row>
                        {this.elements.map( item => (
                                <Col key={item}
                                     lg={6/this.elements.length}
                                     md={6/this.elements.length}
                                     sm={6/this.elements.length}
                                     xs={6/this.elements.length}>
                                    <a className="shortcut-toolbar" href={item.href}>{item.title}</a>
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
        )
    }
}

export default LcpToolbar