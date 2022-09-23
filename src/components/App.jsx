import axios from "axios";
import React, { Component } from 'react'
import Searchbar from "./Searchbar/Searchbar";
import Modal from "./Modal/Modal";
import Loader from "./Loader/Loader";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Button from "./Button/Button";

const BASE_URL = "http://pixabay.com/api/";
const API_KEY = "29247796-24b66d41fb94834f451b18c5a";
export default class App extends Component {
  state = {
    items: [],
    loading: false,
    error: null,
    page: 1
  }
  componentDidMount() {
    this.fetchPhotos();
  }
  fetchPhotos() {
    const { page } = this.state;
    this.setState({ loading: true });

    axios.get(`${BASE_URL}?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(({ data }) => {
        this.setState(({ items }) => {
          return {
            items: [...items, ...data.hits]
          }
        } 
        )
      })
      .catch( error =>
      {
        this.setState({error})
        }
    ).finally(
      this.setState({ loading: false})
  )
}

  render() {
    const { items, loading, error } = this.state;
    return (
      <>
        <Searchbar />
        <ImageGallery items={items} />
        {loading && <Loader />}
        {error && <h2>Sorry.Something get wrong.Try later.</h2>}
      </>
    )
  }
}
