import React from 'react';
import './SlideThree.css';
import ImageThree from '../../../assets/SlideImages/placeholder3.png';

const SlideThree = props => {

    return (
        <div className="hero flex-ctr-col" >
         <img src={ImageThree} alt="fashion"></img>
        <div id="shopNow">
            <h1>This is a Title</h1>
            <h3>This is sub-text</h3>
            <button>Shop Now</button>
        </div>
    </div>
    );
}

export default SlideThree;