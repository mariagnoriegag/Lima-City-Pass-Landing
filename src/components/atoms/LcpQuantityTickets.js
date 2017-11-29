import React, {Component}  from 'react';
import { Grid, Row, Col } from 'react-material-responsive-grid';

//IMAGES:
import arrow_left from '../../assets/arrow_left.svg'
import arrow_right from '../../assets/arrow_right.svg'

import './styles/QuantityTickets.css'

class LcpQuantityTickets extends Component {

    constructor(props) {
        super(props);
        this.state = {quantity: 1};
        this.quantityChange = this.props.quantityChange;
        this.addTicket = this.addTicket.bind(this);
        this.subTicket = this.subTicket.bind(this);
    }
    addTicket(e) {
        this.setState(()=>{
            if (this.state.quantity < 90) {
                this.state.quantity+=1;
                this.quantityChange(this.state.quantity);
            }
        });
        this.forceUpdate();
    }
    subTicket(e) {
        this.setState(()=>{
            if (this.state.quantity > 1) {
                this.state.quantity-=1;
                this.quantityChange(this.state.quantity);
            }
        });
        this.forceUpdate();
    }

    getQuantity() {
        return this.state.quantity;
    }

    componentWillMount () {
        this.addTicket();
        this.subTicket();
    }
    render() {
        return (
            <Grid style={{'display': 'inline-block', 'height': '100%'}}>
                <Row style={{'height': '100%'}}>
                    <Col style={{'display': 'inline-block', 'height': '100%'}}>
                        <div className='center-elementsquantity' style={{'height': '100%', 'align-content': 'center'}}>
                            <a href="#" onClick={this.subTicket} style={{'height': '100%', 'text-align': '-webkit-auto'}}>
                                <img src={arrow_left} style={{'height': '100%'}}/>
                            </a>
                        </div>
                    </Col>
                    <Col style={{'display': 'inline-block', 'height': '100%', 'padding': '0 10px 0 10px'}}>
                        <div className="q-container" style={{'height': '100%'}}>
                            <span className="q-number">{this.state.quantity}</span>
                        </div>
                    </Col>
                    <Col style={{'display': 'inline-block',  'height': '100%'}}>
                        <div className='center-elementsquantity' style={{'height': '100%'}}>
                            <a href="#" onClick={this.addTicket} style={{'height': '100%'}}>
                                <img src={arrow_right} style={{'height': '100%'}}/>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default LcpQuantityTickets