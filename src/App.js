// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Mycars from './Mycars';

class App extends Component{
  state={
    titre:"Mon catalogue voiture"
  }
  changeTitle = (e) =>{
    this.setState({
      titre:"Dur"
    })
  }
  changeViaParam=(titre)=>{
    this.setState({
      titre
    })
  }
  changeViaBind=(param)=>{
    this.setState({
      titre: param
    })
  }
  changeViaInput=(e)=>{
    this.setState({
      titre: e.target.value
    })
  }
  render(){
    return(
      <div className="App">
        <Mycars titre={this.state.titre}/>
        <button onClick={this.changeTitle}>Changer le nom en dur</button>
        <button onClick={()=>this.changeViaParam('Second Changement')}>Via param</button>
        <button onClick={this.changeViaBind.bind(this, 'Titre via bind')}>Via Bind</button>
        <input type='text' onChange={this.changeViaInput} value={this.state.titre}/>
      </div>
    )
  }
}

export default App;
