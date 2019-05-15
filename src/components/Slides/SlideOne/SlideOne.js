import React from 'react';
import './SlideOne.css';

const SlideOne = props => {

    return (
        <div id="slide-one" className="hero flex-ctr-col" >
        <div id="shopNow">
            <h1>This is a Title</h1>
            <h3>This is sub-text</h3>
            <button>Shop Now</button>
        </div>
    </div>
    );
}

export default SlideOne;