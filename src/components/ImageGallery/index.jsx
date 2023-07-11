import React, { Component } from 'react';
import css from './imageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    return (
      <div>
        <ul className={css.gallery}>
          <li><ImageGalleryItem/></li>
        </ul>
      </div>
    );
  }
}

export default ImageGallery;
