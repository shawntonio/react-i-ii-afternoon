import React, { Component } from 'react';
import './App.css';
import Data from './data';
import Buttons from './components/Buttons';
import Form from './components/Form'
import Card from './components/Card';


class App extends Component {
  
  state = {
    data: Data,
    currentIndex: 0,
    formOn: false
  }

  navigate = pos1Neg1 => {
    if(this.state.currentIndex === 0 && pos1Neg1 < 0) return
    if(this.state.currentIndex === this.state.data.length -1 && pos1Neg1 > 0) return
    
    let newIndex = this.state.currentIndex + pos1Neg1
    this.setState({currentIndex: newIndex})
  }

  addPerson = person => {
    this.setState({data: [...this.state.data, person]})
  }

  editCard = (newCard, i) => {
    console.log(newCard)
    this.setState({data: this.state.data.map((card, index) => {
      if(index === i) return newCard
      else return card
    })})
  }

  delete = indexToDelete => {
    if(this.state.data.length === 1) return

    const newData = this.state.data.filter((person, i) => i !== indexToDelete)

    if(this.state.currentIndex +1 === this.state.data.length) this.setState({currentIndex: this.state.currentIndex - 1})

    this.setState({
      data: newData,
    })
  }

  toggleForm = () => {
    this.setState({formOn: !this.state.formOn})
  }

  
  render() {
    return (
      <div className="App">
        <h3 className="home">Home</h3>
        <Card currentIndex={this.state.currentIndex} data={this.state.data}/>

        <Buttons toggleForm={this.toggleForm} data={this.state.data} currentIndex={this.state.currentIndex} navigate={this.navigate} delete={this.delete}/>

        <Form formOn={this.state.formOn} editCard={this.editCard} addPerson={this.addPerson} data={this.state.data} currentIndex={this.state.currentIndex}/>
      </div>
    )
  }
}

export default App;
