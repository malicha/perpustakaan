import React from 'react'
import './Card.css';


const Cards =(props)=>{
    return(
        <div className="card">
            <h1>{props.judul}</h1>
            <h3>{props.author}</h3>
        </div>
    )
}

export default Cards;