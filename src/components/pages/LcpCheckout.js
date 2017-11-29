import React, { Component } from 'react';


class LcpCheckout extends Component {
    constructor(props) {
        super(props);

    }

    render() {


        return (

            <div>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick"/>
                    <input type="hidden" name="hosted_button_id" value="HRB98YFPSQTPY"/>
                    <input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" />
                    <img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1"/>
                </form>


            </div>


        )
    }
}

export default LcpCheckout