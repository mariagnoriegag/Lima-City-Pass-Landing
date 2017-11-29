    import React, { Component } from 'react';
    import "../styles/Discounts.css";
    import { Grid, Row, Col } from 'react-material-responsive-grid';

    class Discounts extends Component {

        constructor(props) {
            super(props);
            this.backgroundDesktop = props.backgroundDesktop;
            this.backgroundMovil = props.backgroundMovil;
            this.title = props.title;
            this.items = props.items;
            this.state = {
                windowHeight: window.innerHeight,
                windowWidth: window.innerWidth
            };
            this.updateDimensions = this.updateDimensions.bind(this);
        };

        updateDimensions(e) {
            this.setState({
                windowHeight: (window.innerHeight),
                windowWidth: (window.innerWidth)
            });
        }
        componentWillMount () {
            this.updateDimensions();
        }
        componentDidMount () {
            window.addEventListener("resize", this.updateDimensions);
        }
        componentWillUnmount () {
            window.removeEventListener("resize", this.updateDimensions);
        }

        render () {
            return (
                <div id='benefits'>
                    <Grid  style={{'margin':0}}>
                        <Col hiddenDown="sm" md={12} lg={12} xl={12} className='containerdiscounts' style={{'padding':0, 'backgroundImage': `url(${this.backgroundDesktop}`}}>
                            <Row className='withoutmarpadd' style={{'height':'-webkit-fill-available', 'margin-left':'10%', 'margin-right':'10%'}}>
                                <Col hiddenDown="sm" md={12} lg={12} className='inline'>
                                    <div className='title' >{this.title}</div>
                                </Col>
                                <Row style={{'width': '100%', 'margin-top':'30px', 'margin-left':0, 'margin-right':0}}>
                                {this.items.map((item) =>
                                    <Col hiddenDown="sm" md={4} lg={4} xl={4} className='inline'>
                                        <div className='' style={{'width': (this.state.windowWidth * 0.25)}}>
                                            <img className='' src={item.image} style={{'width':(this.state.windowWidth * 0.25)}}></img>
                                        </div>
                                        <div className='titlediscounts'>{item.titlebutton}</div>
                                    </Col>
                                )}
                                </Row>
                                <Row className='' style={{'width': '100%', 'margin-top':'100px', 'margin-left':0, 'margin-right':0}}>
                                </Row>
                            </Row>
                        </Col>
                    </Grid>
                    <Grid  style={{'margin':0}}>
                        <Col hiddenUp="md" xs={12} sm={12} className='containerdiscounts' style={{'padding':0, 'backgroundImage': `url(${this.backgroundMovil}`}}>
                            <Row className='withoutmarpadd' style={{'margin':0, 'padding':0}}>
                                <Col hiddenUp="md" xs={12} sm={12} className='inline' style={{'padding-top':'20px','padding-bottom':'20px'}}>
                                    <div className='title' >{this.title}</div>
                                </Col>
                                {this.items.map((item) =>
                                    <Row style={{'margin':0, 'padding-bottom':15}} className='inline'>
                                        <Col hiddenUp="md" sm={12} className='col-xs-12 inline' style={{'padding-bottom':20}}>
                                            <div className='divimagesHowtouse' style={{'height': ((this.state.windowWidth * 0.70) * 1.46), 'width': (this.state.windowWidth * 0.70)}}>
                                                <img className='imagesHowtouse' src={item.image} style={{'height': ((this.state.windowWidth * 0.70) * 1.46), 'width': (this.state.windowWidth * 0.70)}}></img>
                                            </div>
                                            <div className='titlediscounts'>{item.titlebutton}</div>
                                        </Col>
                                    </Row>
                                )}
                            </Row>
                        </Col>
                    </Grid>


                </div>
            )
        }
    }

    export default Discounts


