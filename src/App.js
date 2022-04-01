// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Mycars from './Mycars';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Mycars />
      </div>
    )
  }
}

export default App;
