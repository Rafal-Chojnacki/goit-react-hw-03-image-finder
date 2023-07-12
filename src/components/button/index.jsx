import React from 'react';
import css from './button.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={css.button} onClick={onClick}>
      Load More
    </button>
  );
}

export default Button;
