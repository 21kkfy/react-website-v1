import React from 'react';

function CardText(props) {
    return (
        <ul>
            <h2>{props.title}</h2>
            <p className='cards__item__text gradient-text'>
                {props.text}
            </p>
        </ul>
    );
}


export default CardText;