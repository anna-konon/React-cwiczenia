import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput.js';
import UserOutput from './Components/UserOutput.js';

class App extends Component {
  state = {
    name: 'Anna'
  }

  nameChangeHandler = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {    
    return ( 
      <div className="App">
        <UserOutput userName={this.state.name} />
        <UserInput changed={this.nameChangeHandler} currentName={this.state.name} />
      </div>
    );
  }
}

export default App;