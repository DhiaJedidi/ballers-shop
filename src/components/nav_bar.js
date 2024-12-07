import React from 'react'
import './navbar.css'
import img from './images/logo-ballers-black.png'
import { Link } from 'react-router-dom'
import cart from './images/cart.png'

function NavBar() {
  return (
      <nav className='navbar'>
         <a href="/"><img className='logo' src={img} alt=""  /></a>
         <div className="menu_cont">
         <ul className='menu'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to="/items">Items</Link></li>
            <li><Link to="/contact">Contact</Link></li>
         </ul>
         <Link to='/cart' ><img className='cart_icon' src={cart} alt="" /></Link>
         </div>
      </nav>

  )
}

export default NavBar
