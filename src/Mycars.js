import React, { Component } from 'react';
import Cars from './Cars';


class Mycars extends Component{
    addStyle = (e) =>{
        if(e.target.classList.contains('styled')){
            e.target.classList.remove('styled');
            console.log(e.target)
        }else{
            e.target.classList.add('styled')
            console.log(e.target)

        }
    }
    noCopy=()=>{
        alert('Eh nan frérot tu dois pas')
    }
    render(){
      return(
          <div className='MyCars'>
              <h1 onMouseOver={this.addStyle}>{this.props.titre}</h1>
              <p onCopy={this.noCopy}>Essaie de me copier amigos</p>
              <Cars color='Rouge'>Ford</Cars>
              <Cars color='Noir'>Peugeot</Cars>
              <Cars></Cars>
          </div>
      )
    }
}

export default Mycars;