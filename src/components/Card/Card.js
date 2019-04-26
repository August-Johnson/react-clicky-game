import React from 'react';
import "./Card.css";

function Card(props) {
    return (
        <div className="col-4 col-sm-3 col-md-3 col-lg-3 col-xl-3" >
            <div className="card" clicked={props.clicked} style={{ backgroundImage: `url(${props.image})` }} onClick={() => props.handleClick(props.card)}>
            </div >

        </div>
    );
}

export default Card;
