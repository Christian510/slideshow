
import React, { Component } from 'react';
import SlideOne from  '../DressCampaign/DressOne/DressOne';
import SlideTwo from '../DressCampaign/DressTwo/DressTwo';
import SlideThree from  '../DressCampaign/DressThree/DressThree';
// import SlideFour from  '../Slides/SlideFour/SlideFour';
// import SlideFive from  '../Slides/SlideFive/SlideFive';
// import SlideSix from  '../Slides/SlideSix/SlideSix';



class Slideshow extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            SLIDES: [
                <SlideOne />, <SlideTwo />, <SlideThree />
            ],
            currentSlide: 0 
        };

        this.interval = null;

        this.nextSlide = this.nextSlide.bind(this);
    }

    nextSlide() {
        let current = this.state.currentSlide;

        let next = ++current % this.state.SLIDES.length;
        this.setState({ currentSlide: next });
    }

    componentDidMount() {
        this.interval = setInterval(this.nextSlide, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
   
        const slide = this.state.SLIDES[this.state.currentSlide];
        return (
            <div>
                {slide}
            </div>
        );
    }
}

export default Slideshow;