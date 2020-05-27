import React from 'react';
// import { Link } from 'react-router-dom';
import NavBar from './Nav/NavBar';
import FeatureContainer from './FeatureContainer';
import ProductContainer from './ProductContainer';
import FooterContainer from './FooterContainer';
// import axios from 'axios';

export default class Home extends React.Component {

  render () {
    return (
      <div className="Home">
        <NavBar />
        <FeatureContainer />
        <ProductContainer searchTerm={this.props.searchTerm} />
        <FooterContainer />
      </div>
    )
  }
};

/* <Link to='/login'>Log In</Link>
<br></br>
<Link to='/signup'>Sign Up</Link>
<br></br>
if user is logged in, show 'Log Out' link, otherwise hide
{props.loggedInStatus ? <Link to='/logout' onClick={handleClick}>Log Out</Link> : null} */

// const handleClick = () => {
  //   axios.delete('http://localhost:3001/logout', {withCredentials: true})
  //     .then(resopnse => {
  //       props.handleLogout()
  //       props.history.push('/')
  //     })
  //     .catch(error => console.log(error))
  // }