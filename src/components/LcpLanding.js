import React, { Component } from 'react';
import LcpFront from './LcpFront';
import LcpWhatsIncluded from './LcpWhatsIncluded'
import LcpHowToUse from './LcpHowToUse'
import BackgroundImage from '../assets/limaplaza.png'
import BackgroundWhatsIncluded from '../assets/whatsincluded.png'
import TicketsImage from '../assets/cards2.png'
import BackgroundHowToUse from '../assets/howtouseit.png'

import '../App.css'

import Step1 from '../assets/heart.png'
import Step2 from '../assets/tablet.png'
import Step3 from '../assets/qr.png'
import Step4 from '../assets/user.png'

class LcpLanding extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.carouselImages = [
            {
                image: 'http://e.rpp-noticias.io/normal/2017/07/15/4455811jpg.jpg',
                name: 'Huaca Pucllana',
                title: 'A museum',
                description: ''
            },
            {
                image: 'http://www.hotel-r.net/im/hotel/it/museo-70.jpg',
                name: 'Generic Museum',
                title: 'A museum',
                description: ''
            },
            {
                image: 'https://www.interpatagonia.com/paseos/carmen_funes/funes1.jpg',
                name: 'Brontosaurus',
                title: 'A museum',
                description: ''
            }
        ];
        this.whatis_title = "What's included"
        this.whats_contentcenter = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non blandit tellus, sed iaculis odio. Nullam convallis leo at porta molestie. Aliquam sagittis erat vitae est mollis tristique. Sed ultricies id lacus at ornare. Etiam quis turpis pulvinar, porta urna dignissim, efficitur justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';
        this.whats_contentleft = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non blandit tellus, sed iaculis odio. Nullam convallis leo at porta molestie. Aliquam sagittis erat vitae est mollis tristique. Sed ultricies id lacus at ornare. ';
        this.howto_title = "How to use it";
        this.howtouseImages = [
            {
                image: Step1,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non blandit tellus.'
            },
            {
                image: Step2,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non blandit tellus.'
            },
            {
                image: Step3,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non blandit tellus.'
            },
            {
                image: Step4,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non blandit tellus.'
            }
        ];
    }
    render() {
        return (
            <div className="App">
                <LcpFront background={BackgroundImage}/>
                <LcpWhatsIncluded items={this.carouselImages} background={BackgroundWhatsIncluded} imagetickets={TicketsImage} title={this.whatis_title} contentcenter={this.whats_contentcenter} contentleft={this.whats_contentleft}/>
                <LcpHowToUse items={this.howtouseImages} background={BackgroundHowToUse} title={this.howto_title} />
                <div style={{'height': 500, backgroundColor: "#FF0000"}}>
                    {/* Lindo chiquitititititito */}
                </div>
            </div>
        );
    }
}

export default LcpLanding;
