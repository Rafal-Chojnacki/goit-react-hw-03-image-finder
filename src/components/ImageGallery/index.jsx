import React, { Component } from 'react';
import css from './imageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    console.log(this.props.images);
    return (
      <ul className={css.gallery}>
        {this.props.images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            openModal={this.props.openModal}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
