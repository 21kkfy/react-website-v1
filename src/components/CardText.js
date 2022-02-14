import React from 'react';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


function CardText(props) {
    function toggleVision() {
        var x = document.getElementById(props.id);
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }


    return (
        <ul>
            <h2><i onClick={toggleVision} className='fab fa-typo3' />   {props.title}</h2>
            <p id={props.id} className='cards__item__text gradient-text'>
                {props.text}
            </p>
        </ul>
    );
}


export default CardText;