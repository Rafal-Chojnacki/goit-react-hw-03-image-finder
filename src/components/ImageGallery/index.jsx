import React, { Component } from 'react';
import css from './imageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { images, openModal } = this.props;
  
    return (
      <ul className={css.gallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={`${this.props.searchTerm}-${image.id}`}
            image={image}
            openModal={openModal}
          />
        ))}
      </ul>
    );
  }
}


export default ImageGallery;
