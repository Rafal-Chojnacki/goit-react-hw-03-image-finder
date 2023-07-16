import React from 'react';
import axios from 'axios';
import SearchBar from './searchBar';
import ImageGallery from './ImageGallery';
import { Component } from 'react';
import Modal from './modal';
import Button from './button';
import { ColorRing } from 'react-loader-spinner';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      images: [],
      selectedImage: null,
      currentPage: 1,
      isLoading: false,
    };
  }

  handleImages = (searchTerm, newImages) => {
    this.setState({
      searchTerm,
      images: newImages,
    });
  };

  setImages = images => {
    this.setState(prevState => ({
      ...prevState,
      images: [...prevState.images, ...images],
    }));
  };

  openModal = image => {
    this.setState({ selectedImage: image });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  loadMoreImages = async () => {
    const { searchTerm, currentPage } = this.state;
    const apiKey = '31641463-8cc19d34af378b8aeb6cde8f1';
    const nextPage = currentPage + 1;
    const response = await axios.get(
      `https://pixabay.com/api/?q=${searchTerm}&page=${nextPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    );
    const newImages = response.data.hits;
    console.log(newImages);
    this.setState(prevState => ({
      images: [...prevState.images, ...newImages],
      currentPage: nextPage,
    }));
    console.log(this.state.images);
  };

  render() {
    const { isLoading, images, selectedImage } = this.state;

    return (
      <div>
        {console.log(images.total)}
        <SearchBar handleImages={this.handleImages} />
        {isLoading ? (
          <ColorRing />
        ) : (
          <ImageGallery
            key={this.state.searchTerm}
            images={images}
            searchTerm={this.state.searchTerm}
            openModal={this.openModal}
          />
        )}
        {selectedImage && (
          <Modal image={selectedImage} onClose={this.closeModal} />
        )}
        {this.state.images.total === 0 ? (
          <Button isInvisible={true} onClick={this.loadMoreImages} />
        ) : (
          <Button onClick={this.loadMoreImages} />
        )}
      </div>
    );
    
  }
}

export default App;
