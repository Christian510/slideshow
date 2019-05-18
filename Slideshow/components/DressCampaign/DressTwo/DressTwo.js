import React from 'react';
import '../../SlideShowStyles/SlideShowStyles.css';
import './DressTwo.css';
import ImageTwo from '../../../assets/DressImages/dress2.png';

const DressTwo = props => {

    return (
        <div className="container flex-ctr-col" >
        <img src={ImageTwo} alt="fashion"></img>
        <div id="position-2" className="shopNow">
            <h1>This is a Title</h1>
            <h3>This is sub-text</h3>
            <button>Shop Now</button>
        </div>
    </div>
    );
}

export default DressTwo;