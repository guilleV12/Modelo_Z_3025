import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const HamburgerBtn = ({ callbackMenuFn }) => {

  return (
    <nav className='absolute right-1 top-0 md:hidden flex justify-center items-center h-full' >
      <button onClick={callbackMenuFn} id='logo'>
        <FontAwesomeIcon icon={faBars} className='fa-xl'/>
      </button>
    </nav>
  )
}

export default HamburgerBtn