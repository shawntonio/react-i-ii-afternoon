import React, { Component } from 'react';
import './App.css';
import Data from './data';
import Buttons from './components/Buttons';
import Card from './components/Card';

class App extends Component {
  
  state = {
    data: Data,
    currentIndex: 0,
  }

  navigate = pos1Neg1 => {
    if(this.currentIndex === 0) return
    if(this.currentIndex === this.data.length) return
    const newIndex = this.currentIndex + pos1Neg1
    this.setState({currentIndex: newIndex})
  }
  
  render() {
    return (
      <div className="App">
        <h5>Home</h5>
        <Card currentIndex={this.state.currentIndex} data={this.data}/>
        <Buttons currentIndex={this.currentIndex} navigate={() => this.navigate()}/>
      </div>
    );
  }
}

export default App;
