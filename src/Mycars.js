import React, { Component } from 'react';
import Cars from './Cars';


class Mycars extends Component{
    render(){
      return(
          <div className='MyCars'>
              <h1>Hello React</h1>
              <Cars color='Rouge'>Ford</Cars>
              <Cars color='Noir'>Peugeot</Cars>
              <Cars color="Jaune">Nissan</Cars>
          </div>
      )
    }
}

export default Mycars;