import { faAddressBook, faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const MobileMenu = ({ isMenuOpen, callbackMenuFn, links }) => {
  return (
    <>
      {isMenuOpen && (
        <div className='overlay fixed md:hidden top-0 left-0 w-full h-full z-9'>

        </div>
      )}

      <nav className={`mobile-menu fixed md:hidden top-0 right-0 h-[calc(100vh-10px)] w-[70%] rounded-bl-md bg-black z-10 ${isMenuOpen ? 'translate-x-0 neon-shadow' : 'translate-x-[100%]'} 
      transition-transform`}>
        <div className='relative w-full h-full'>
          <button className='absolute top-2 right-2' onClick={callbackMenuFn}>
            <FontAwesomeIcon icon={faXmark} className='fa-xl'/>
          </button>

          <a href="" className='absolute top-2 right-10' title='info'>
            <FontAwesomeIcon icon={faSquarePlus} className='fa-xl'/>
          </a>

          <a href="" className='absolute top-2 right-18'>
            <FontAwesomeIcon icon={faAddressBook} className='fa-xl'/>
          </a>
          
          <ul className='flex flex-col h-[50%] w-full pt-10 mobile-menu-list'>
          {
            links.map((item) => (
              <li key={item} className='relative flex-1 flex items-center justify-center font-medium text-md'>
                <a href='#'>
                  {item}
                </a>
              </li>
            ))
          }
        </ul>
        </div>
      </nav>
    </>
  )
}

export default MobileMenu