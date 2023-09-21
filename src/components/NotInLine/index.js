import React from 'react'
import {BsFillPersonFill} from 'react-icons/bs'
import {HiOutlinePhone} from 'react-icons/hi'
import {CiLocationOn} from 'react-icons/ci'
import Header from '../Header'
import Expanding from '../Expanding'
import Packages from '../Packages'

import './index.css'

export default function index() {

      const onFormSubmit = e=>{
            e.preventDefault()
      }

  return (
    <>
    <Header/>
    <div className='book-call-container'>
      <div>
      <form onSubmit={onFormSubmit}  className='form-container'>
            <h3 className='form-heading'>Fill in the details to get a call!</h3>
            <div className='input-container'>
                  <BsFillPersonFill className='form-icons' />
            <input type="text" placeholder='Full name' className='form-input'/>
            </div>
            <div className='input-container'>
                  <HiOutlinePhone className='form-icons' />
            <input type="text" placeholder='Phone number' className='form-input'/>
            </div>
            <div className='input-container'>
                  <CiLocationOn className='form-icons' />
            <input type="text" placeholder='Location' className='form-input'/>
            </div>
            <div className='input-container'>
            <input id="checkbox" className='box' type="checkbox" placeholder='Location'/>
            <label htmlFor='checkbox' className='checkbox'>By continuing, you agree to our T&C and privacy policy</label>
            </div>
            <div className='proceed-button-container'>
                  <button type="submit" className='proceed-button'>
                        Proceed
                  </button>
            </div>
      </form>
      <div className='offers-container'>
                  <div className='left-container'>
                        <p>Get a Full Body Checkup Now at<span>$5,999</span><span> $999</span></p>
                  </div>
                  <div className='right-container'>
                        <p>70% OFF</p>
                  </div>
            </div>
            </div>
            <div className='best-class-container'>
                  <h1 className='heading'><span className='best-in-class'>Best in class</span> lab tests!</h1>
                  <img src="https://res.cloudinary.com/dky69roxl/image/upload/v1695124914/Component_1_gf5hrv.png" 
                  alt="doctor" className='best-in-class-image' />
            </div>
    </div>
    <div className="lab-container">
            <div className='Accredited-lab-container'>
                  <img src="https://res.cloudinary.com/dky69roxl/image/upload/v1695284165/Rectangle_80_j466kw.png" 
                  alt="Accredited lab" className='lab-image'/>
                  <p className='lab-name'>NABL Accredited Labs</p>
            </div>
            <div className='free-lab-container'>
                  <img src="https://res.cloudinary.com/dky69roxl/image/upload/v1695284174/Rectangle_81_iswwcy.png" 
                  alt="free lab" className='lab-image' />
                  <p className='lab-name'>Free sample collection</p>
            </div>
    </div>
    <Expanding />
    <Packages />
    </>
  )
}
