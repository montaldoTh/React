import React, { Component } from 'react';

const Cars=(props)=>{
    return(
        <div className="Cars" style={{backgroundColor: 'lightgray', width:'400px', padding:'10px', margin:'5px auto'}}>
            <p> Marque : {props.children} </p>
            <p> Couleur : {props.color}</p>
        </div>
    )
}

export default Cars;