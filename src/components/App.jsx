import React from 'react';
import SearchBar from './searchBar';
import ImageGallery from './ImageGallery';
import { Component } from 'react';
import Modal from './modal';
import Button from './button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      selectedImage: null,
    };
  }

  setImages = images => {
    this.setState(prevState => ({
      ...prevState,
      images: images,
    }));
  };

  openModal = image => {
    this.setState({ selectedImage: image });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    return (
      <div>
        <SearchBar handleImages={this.setImages} />
        <ImageGallery images={this.state.images} openModal={this.openModal} />
        {this.state.selectedImage && (
          <Modal image={this.state.selectedImage} onClose={this.closeModal} />
        )}
        <Button/>
      </div>
    );
  }
}

export default App;
