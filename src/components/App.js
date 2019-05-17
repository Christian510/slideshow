import React, {Component} from 'react';

import SlideOne from  './Slides/SlideOne/SlideOne';
import SlideTwo from './Slides/SlideTwo/SlideTwo';
import SlideThree from  './Slides/SlideThree/SlideThree';
import SlideFour from  './Slides/SlideFour/SlideFour';
import SlideFive from  './Slides/SlideFive/SlideFive';
import SlideSix from  './Slides/SlideSix/SlideSix';

import './App.css';
import Slideshow from './Slideshow/Slideshow';

class App extends Component {
  constructor(){
    super();
    this.state = {
      GroupA: [<SlideOne />, <SlideTwo />, <SlideThree />],
      GroupB: [<SlideFour />, <SlideFive />, <SlideSix />]
    }
  }
  render(){
  return (
    <div className="App">
      <Slideshow 
        slides={this.state.GroupA}
      />
    </div>
  );
}
}

export default App;
