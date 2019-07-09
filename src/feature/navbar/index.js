import './style.css'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
      <ul className='nav nav-tabs'>
        <li role='presentation'>
          <Link to='/' className='image-link nav-link'>
            <i className='fa fa-home fa-2x' alt='home'>&nbsp;</i>
            Home
          </Link>
        </li>
        <li role='presentation'>
          <Link to='/about' className='text-link  nav-link'>
            <i className='fa fa-question fa-2x'>&nbsp;</i>
            About This Project
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
