import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


// Pages:
import LcpLanding from './components/pages/LcpLanding'
import LcpSandbox from './components/pages/LcpSandbox'
import LcpCheckout from './components/pages/LcpCheckout'



class App extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={LcpLanding}/>
                    <Route exact path="/sandbox" component={LcpSandbox}/>
                    <Route exact path="/checkout" component={LcpCheckout}/>
                </div>
            </Router>
        );
    }
}

export default App;
