import React from 'react';
import './styles.css'
const Navbar = () => {
  return (
    <div className="container">
        <img class="logo" src="/logo.png" alt="" />
        <ul className='list'>
          <li> 
            <a href="#sweets">Sweets</a>
            </li>
          <li>
            <a href="#chikkis">Bites & Chikkis</a>
            </li>
          <li>
            <a href="#snacks">Snacks</a>
            </li>
          <li>
            <a href="#contact">Bulk Orders</a>
            </li>
        </ul>
        <button>
          <a href="#contact">Contact Us</a>
          </button>
    </div>
    
  )
}

export default Navbar