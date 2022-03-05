import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  var twitterName = props.twitter;
  return (
    <>
      <li className='cards__item__link'>
        <figure className='cards__item__pic-wrap' data-category={props.label}>
          <img
            className='cards__item__img'
            alt-text='Member Image'
            src={props.src}
          />
        </figure>
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{props.text}</h5>
          <Link
            className='social-icon-link twitter'
            to={{ pathname: "https://twitter.com/" + twitterName }}
            target='_blank'
            aria-label='Twitter'
            rel="noopener noreferrer"
          >
            <i className='fa-brands fa-twitter cards__item__icon' />
          </Link>
        </div>
      </li>
    </>
  );
}

export default CardItem;
