import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  var twitterName = props.twitter;
  return (
    <>
      <li className='cards__item__link flat-horizontal-line'>
        <figure className='cards__item__pic-wrap' data-category={props.label}>
          <img
            className='cards__item__img'
            alt-text='Member Image'
            src={props.src}
          />
        </figure>
        <div className='cards__item__info'>
          <h5 className='cards__item__text flat-horizontal-line'>
            <Link
              style={{ color: "Black" }}
              className='cards__item__about__link'
              to={{ pathname: "https://twitter.com/" + twitterName }}
              target='_blank'
              aria-label='Twitter'
              rel="noopener noreferrer"
            >
              {props.name}
            </Link>
          </h5>
          <ul style={{ listStyleType: "disc" }}>
            <li>
              <p className='cards__item__about'>{props.about1}</p>
            </li>
            <li>
              <p className='cards__item__about'>{props.about2}</p>
            </li>
            <li>
              <p className='cards__item__about'>{props.about3}</p>
            </li>
          </ul>

        </div >
      </li >
    </>
  );
}

export default CardItem;
