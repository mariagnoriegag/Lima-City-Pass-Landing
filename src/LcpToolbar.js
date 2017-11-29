import { Grid, Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';

import "./styles/Toolbar.css"

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
                                     md={3/this.elements.length}
                                     className="shortcut-toolbar"
                                >{item}</Col>
                        ))}
                        <Col xsOffset={1} lg={2} md={2}>
                            BUY BUTTON
                        </Col>
                        <Col lg={1} md={1}>
                            SIGN IN
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default LcpToolbar