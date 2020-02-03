import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    inputText: ''
  }

  inputChangedHandler = ( event ) => {
    this.setState( { inputText: event.target.value } );
  }

  deleteCharHandler = ( index ) => {
    const text = this.state.inputText.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({inputText: updatedText});
  }

  render() {
    const charList = this.state.inputText.split('').map((ch, index) => {
      return <Char 
        character={ch} 
        key={index}
        clicked={() => this.deleteCharHandler(index)} />;
    });
    return (
      <div className="App">
        <input type="text" onChange={this.inputChangedHandler} value={this.state.inputText} />
        <p>{this.state.inputText}</p>
        <Validation inputLength={this.state.inputText.length} />
        {charList}
      </div>
    );
  }
}

export default App;
