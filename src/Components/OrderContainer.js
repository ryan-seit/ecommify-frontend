import React from 'react';
// import { Link } from 'react-router-dom';
// import LoadingSpinner from './LoadingSpinner';

export default class OrderContainer extends React.Component {

  state = {
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    loaded: true
  }

  componentDidMount() {
    // this.fetchProducts()
  }

  render() {

    return (
      <div className="OrderContainer">

      </div>
    )
  }
};