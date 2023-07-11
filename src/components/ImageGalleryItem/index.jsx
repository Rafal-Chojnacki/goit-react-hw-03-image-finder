import React, { Component } from 'react';
import css from './imageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    return (
      <div>
        <li className={css.item}>
          <img className={css.image} src="" alt="" />
        </li>
      </div>
    );
  }
}

export default ImageGalleryItem;
