import React from 'react';
//var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
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
        <li className=' reveal'>
            <h2 onClick={toggleVision} ><i className='fa fa-plus' />   {props.title}</h2>
            <p id={props.id} className='box cards__item__text closed-first text-left reveal box-text'>{props.text}</p>
        </li>
    );
}


export default CardText;