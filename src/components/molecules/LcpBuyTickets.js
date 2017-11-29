import React, {Component} from 'react';


// ATOMS:
import LcpButtonProceedToCheckout from '../atoms/LcpButton';
import LcpQuantityTickets from '../atoms/LcpQuantityTickets';
import TicketsImage from '../../assets/ticketfront.svg'
import LimaCityPass from '../../assets/LIMA CITY PASS.svg'

import './styles/BuyTickets.css'


class LcpBuyTickets extends Component {
    constructor(props) {
        super(props);
        this.state = {total: 0};
        this.updateQuantity = this.updateQuantity.bind(this);
    }

    updateQuantity (data) {
        const ticketPrice = 14.9;
        this.setState(()=>{
            this.state.total = ticketPrice*data;
        });
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <div className="buy-card">
                    <div className='buy-body'>
                        <div className='greats'>
                            <div className='footercontent'>
                                <div className='body-title'>Hi Traveler!</div>
                                <div className='body-text'>Buy tickets and start your great adventure in Lima, Peru.</div>
                            </div>
                        </div>
                        <div className='centered divbodycontent'>
                            <div className='bodycontent'>
                                <div className='divticketsimage'>
                                    <img src={TicketsImage} className='ticketsimage'></img>
                                </div>
                                <div className='divLimaCityPassText'>
                                    <img src={LimaCityPass} className='LimaCityPassText'></img>
                                </div>
                                <div className='divquantitytickets'>
                                    <LcpQuantityTickets quantityChange={this.updateQuantity}/>
                                </div>
                                <div className='total-text'>
                                    <p>Total: <span> $ </span> <span id='total'> {this.state.total.toFixed(2)} </span></p>
                                </div>
                            </div>
                        </div>
                        <div className='centered divfootercontent '>
                            <div className='footercontent'>
                                <LcpButtonProceedToCheckout/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default LcpBuyTickets;