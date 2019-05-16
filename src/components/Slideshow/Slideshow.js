
import React, { Component } from 'react';
import SlideOne from  '../Slides/SlideOne/SlideOne';
import SlideTwo from '../Slides/SlideTwo/SlideTwo';
import SlideThree from  '../Slides/SlideThree/SlideThree';

// const SLIDES = [SlideOne, SlideTwo, SlideThree]

class Slideshow extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            SLIDES: [
                <SlideOne />, <SlideTwo />, <SlideThree />
            ],
            
            currentSlide: 0 };

        this.interval = null;

        this.nextSlide = this.nextSlide.bind(this);
    }

    nextSlide() {
        let current = this.state.currentSlide;
        let next = ++current % this.state.SLIDES.length; //this is smart way to get current to be index 0 again if it reached the end to the array...
        this.setState({ currentSlide: next });
    }

    componentDidMount() {
        this.interval = setInterval(this.nextSlide, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {

        
        const src = this.state.SLIDES[this.state.currentSlide];
        // const style = 
        return (
            <div>
                {src}
            </div>
        );
    }
}

export default Slideshow;