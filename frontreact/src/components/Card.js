import React from 'react';
import "./Card.scss";

/**
 * Using react component based on function
 * @param {*} props
 * @returns
 */
export const Card = (props) => {
  const { name, picture, price, isActive } = props;
  let estilo = {};
  if (isActive !== "true") { //Sombreamos los que tengan Active como falso
    estilo = {
      filter: "grayscale(100%)",
      backgroundColor: "rgb(200, 200, 200)",
      pointerEvents: 'none',
    }
  }
  return (
    //borde de las cards 
    <div className="card-border" style={estilo}>
      <div className="card-margin">
        <div className='card-header'>
          <p className='card-title'>{name}</p>
          <span className='material-icons card-favorite'>favorite_border</span>
        </div>
        <img className='card-img' src={picture} alt={name} />
        <div className='card-bottom'>
          <p className='price'>$ {price}</p>
        </div>
      </div>
    </div>
  );
};
