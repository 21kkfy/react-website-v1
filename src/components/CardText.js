import React from 'react';
//var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
//<i onClick={toggleVision} className='fa fa-plus' />
//https://callstack.github.io/react-native-paper/icon-button.html

function CardText(props) {
    /**
     * @var paraTag is paragraph tag.
     */
    function toggleVision() {
        var paraTag = document.getElementById(props.id);
        if (paraTag.style.display === "block") {
            paraTag.style.display = "none";
        } else {
            paraTag.style.display = "block";
        }
    }

    return (
        <li>
            <h2><i onClick={toggleVision} className='fa fa-plus' />   {props.title}</h2>
            <p id={props.id} className='box cards__item__text gradient-text closed-first text-left'>{props.text}</p>
        </li>
    );
}


export default CardText;