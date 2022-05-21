import React from 'react'
import './Header.css'
import headerLogo from '../../assets/logo/R&MAPi-Logo.png'

function Header() {
  return (
      <header className='header'>
          <img src={headerLogo} alt="RM-Logo" id='header-img'/>
      </header>

  )
}

export default Header