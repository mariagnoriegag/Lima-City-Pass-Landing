import React, { Component } from 'react';


import LcpBuyTickets from '../molecules/LcpBuyTickets'

class LcpSandbox extends Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <LcpBuyTickets/>
            </div>
        );
    }
}

export default LcpSandbox