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
    if(this.state.currentIndex === 0 && pos1Neg1 < 0) return
    if(this.state.currentIndex === this.state.data.length -1 && pos1Neg1 > 0) return
    
    let newIndex = this.state.currentIndex + pos1Neg1
    this.setState({currentIndex: newIndex})
  }

  
  render() {
    return (
      <div className="App">
        <h3 className="home">Home</h3>
        <Card currentIndex={this.state.currentIndex} data={this.state.data}/>
        <Buttons currentIndex={this.state.currentIndex} navigate={this.navigate}/>
      </div>
    );
  }
}

export default App;
