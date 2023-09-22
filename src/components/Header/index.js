import React,{useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiLogoPlayStore} from 'react-icons/bi'
import './index.css'

const Header = ()=> {
      const [showMenu, setShowMenu] = useState(false)

      const onToggleMenu = ()=>{
            setShowMenu(!showMenu)
      }

  return (
    <nav className='navbar'>
      <img src="https://res.cloudinary.com/dky69roxl/image/upload/v1695112193/Component_10_ncf8fk.png" 
      alt="website logo"
      className='website-logo' />
      <ul className='nav-list-items'>
            <li className='nav-item'>Home</li>
            <li  className='nav-item'>Health conditions</li>
            <li  className='nav-item'>Lab tests</li>
            <li  className='nav-item'>Medicines</li>
      </ul>
      <div className='button-container'>
            <button type="button" className='nav-button'>
                  For patients
            </button>
            <button type="button" className='nav-button'>
                  For hospitals
            </button>
      </div>
      <button type="button" className='play-store-button'>
         <BiLogoPlayStore className='store-icon' />   Play store
      </button>
      <button type="button" onClick={onToggleMenu} className='hamburger-button'>
            <GiHamburgerMenu />
      </button>
    </nav>
  )
}




export default Header