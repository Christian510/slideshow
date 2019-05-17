import React from 'react';
import './SlideOne.css';
import ImageTwo from '../../../assets/SlideImages/placeholder2.png';

const SlideTwo = props => {

    return (
        <div className="hero flex-ctr-col" >
        <img src={ImageTwo} alt="fashion"></img>
        <div id="shopNow">
            <h1>This is a Title</h1>
            <h3>This is sub-text</h3>
            <button>Shop Now</button>
        </div>
    </div>
    );
}

export default SlideTwo;