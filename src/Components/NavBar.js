import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { filterProducts } from '../store/actions';

axios.defaults.withCredentials = true;

const NavBar = (props) => {

  const searchTerm = useSelector(state => state.searchTerm)
  const cart = useSelector(state => state.cart.items)
  const filteredProducts = useSelector(state => state.product.filteredItems)

  const dispatch = useDispatch()

  const handleFormSubmit = e => {
    e.preventDefault()
    dispatch({ type: "SET_SEARCHTERM" })
  }

  const handleLogout = () => {
    axios.post('http://localhost:3001/api/v1/logout')
  }

  const handleClick = category => {
    filterProducts(category)
    console.log('navbar handleclick', filteredProducts)
  };

  return (
    <div className="NavBar">
      
      <div className="NavTop">
        
        
        <div className="NavTopR">
          <div className="Search">
            <form onSubmit={handleFormSubmit}>
              <input type="text" value={searchTerm}
                onChange={e => dispatch({ type: "SET_SEARCHTERM", payload: e.target.value })}
              />
              <i className="fas fa-search"></i>
            </form>
          </div>

          {props.currentUser ? (
            <>
              <div className="nav__account">{props.currentUser.email}</div>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to={'/login'}>
                <button className="login-btn">Login</button>
                {/* <i class="fas fa-sign-in-alt"><span> Login</span></i> */}
              </Link>
              <Link to={'/signup'}>
                <button className="signup-btn">Signup</button>
                {/* <i class="fas fa-user-plus"><span> Signup</span></i> */}
              </Link>
            </>
          )}

        </div>
      </div>
      
      <div className="NavBot">
          <Link to={'/'}>
            <div className="Logo">coda</div>
          </Link>

          <div className="navbar-bot--categories">
            <Link to={'/products/all'}>
              <div className="NavCategory">All</div>
            </Link>
            <Link to={'/products/underwear'}>
              <div className="NavCategory" onClick={() => handleClick("underwear")}>Underwear</div>
            </Link>
            <Link to={'/products/bras'}>
              <div className="NavCategory">Bras</div>
            </Link>
            <Link to={'/products/apparel'}>
              <div className="NavCategory">Apparel</div>
            </Link>
            <Link to={'/about'}>
              <div className="NavCategory">About</div>
            </Link>
            <Link to={'/cart'}>
            {/* <button className="Cart">Cart</button> */}
            {/* <i className="fa">&#xf07a;</i> */}
            <i className="fas fa-shopping-cart"></i>
            <span className='badge badge-warning' id='lblCartCount'>{cart.length}</span>
          </Link>
          </div>
          
      </div>

    </div>
  )
}

export default NavBar;