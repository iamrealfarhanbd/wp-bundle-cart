import React, { useState, useEffect } from 'react';
import axios from 'axios';

const rez = 'https://dev-authlabsupport.pantheonsite.io/wp-content/uploads/2022/08/1658172507816.jpg';
const Card = () => {
    return(
        <React.Fragment>
            <div className="card" style={{width: 100}}>
            <img src={rez} className="card-img-top " width={150} height={150} alt="..." />
            <div className="card-body">
                <h5 className="card-title">Rezwan shiblu sir my  js GURU</h5>
                <p className="card-text">Now I am A React Plugin Dev</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            
        </React.Fragment>
    )
}

export default Card;