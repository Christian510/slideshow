import React from 'react';
import '../../SlideShowStyles/SlideShowStyles.css';
import ImageOne from '../../../assets/DressImages/placeholder1.png';

const DressOne = props => {

    return (
        <div className="hero flex-ctr-col" >
            <img src={ImageOne} alt="fashion"></img>
            <div id="shopNow">
                <h1>This is a Title</h1>
                <h3>This is sub-text</h3>
                <button>Shop Now</button>
            </div>
        </div>
    );
}

export default DressOne;