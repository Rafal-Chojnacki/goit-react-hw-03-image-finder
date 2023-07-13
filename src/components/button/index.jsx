import React from 'react';
import css from './button.module.css';

const Button = ({ onClick }) => {
  return (
    <div className={css.btnBox}>
      <button className={css.button} onClick={onClick}>
        Load More
      </button>
    </div>
  );
};

export default Button;
