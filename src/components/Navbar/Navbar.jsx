import React, { useState } from 'react'
import { warrior2 } from '../../utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import HamburgerBtn from './HamburgerBtn'
import MobileMenu from './MobileMenu'

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)
  const links = ["Origen", "Codigo", "Modelo"]

  const handleOpenCloseMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <header className='relative flex items-center justify-between w-[90vw] mx-auto h-20 mt-2'>

      <nav className='hidden md:block flex-1 h-full'>
        <ul className='hidden md:flex h-full w-full'>
          {
            links.map((item) => (
              <li key={item} className='relative flex items-center justify-center w-fit px-4'>
                <a href='#' className='md:text-md md:font-normal'>
                  {item}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>

      <div className='flex items-center justify-center flex-1'>
        <a href="">
          <img src={warrior2} alt="logo" id='logo' className='h-19 w-19' loading='lazy'/>
        </a>
      </div>
      
      <div className='header-links flex-1 hidden md:flex h-full w-full'>
          <ul className='flex h-full w-full justify-end'>
            <li className='relative flex w-fit px-4 items-center justify-center'>
              <a href="" className='flex items-center' title='info'>
                <FontAwesomeIcon icon={faSquarePlus} className='fa-lg lg:fa-xl'/>
                <p className='ml-2 md:text-md md:font-normal'>Info</p>
              </a>
            </li>
            <li className='relative flex w-fit px-4 items-center justify-center'>
              <a href="" className='flex items-center' title='contacto'>
                <FontAwesomeIcon icon={faAddressBook} className='fa-lg lg:fa-xl '/>
                <p className='ml-2 md:text-md md:font-normal'>Contacto</p>
              </a>
            </li>
          </ul>
      </div>

      <HamburgerBtn callbackMenuFn={handleOpenCloseMenu}/>
      {openMenu && <MobileMenu isMenuOpen={openMenu} callbackMenuFn={handleOpenCloseMenu} links={links}/>}
    </header>
  )
}

export default Navbar