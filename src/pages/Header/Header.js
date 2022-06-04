import React from 'react'
import './Header.css'
import headerLogo from '../../assets/logo/R&MAPi-Logo.png';
import { motion } from 'framer-motion';

function Header() {
  return (
      <header className='header'>
          <motion.img animate={{scale:[1.5, 1], rotate:[720, 1440], zIndex: 1}} transition={{duration: 1.3}} src={headerLogo} alt="RM-Logo" id='header-img'/>
      </header>

  )
}

export default Header