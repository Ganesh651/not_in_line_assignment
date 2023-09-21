import {BsFillTelephoneFill} from 'react-icons/bs'
import './styles.css'



const Footer = ()=>(
      <nav className='footer-container'>
            <div className='footer-top-section'>
                  <div className='footer-details-container'>
                        <img src="https://res.cloudinary.com/dky69roxl/image/upload/v1695298500/NIL_logo_Transparent_1_1_ihcjbl.png" 
                        alt="footer logo" 
                        className='footer-logo' />
                        <p className='footer-description'>Book doctor appointments online and get your ailments treated in no time with our expert medical support systems. Get rid of all your medical problem with our expert panel of doctors who guide you towards a healthier life.</p>
                        <div className='phone-container'>
                              <p className='country-code'>+91</p>
                              <input type="text" className='footer-input'/>
                              <button type="button" className='phone-button'>
                                    <BsFillTelephoneFill className='phone-icon'/>
                              </button>
                        </div>
                  </div>
                  <div className='footer-item'>
                  <div className='footer-item-container'>
                        <h1 className='footer-item-heading'>Services</h1>
                        <ul className='footer-items-list'>
                              <li><p>Appointments</p></li>
                              <li><p>Lab tests</p></li>
                              <li><p>A-Z medicine</p></li>
                              <li><p>Doctor support</p></li>
                        </ul>
                  </div>
                  <div className='footer-item-container'>
                        <h1 className='footer-item-heading'>Legal</h1>
                        <ul className='footer-items-list'>
                              <li><p>General info</p></li>
                              <li><p>Privacy policy</p></li>
                              <li><p>Terms of services</p></li>
                              <li><p>Consultation</p></li>
                              <li><p>How it works</p></li>
                        </ul>
                  </div>
                  <div className='footer-item-container'>
                        <h1 className='footer-item-heading'>Talk to us</h1>
                        <ul className='footer-items-list'>
                              <li><p>support@notinline.com</p></li>
                              <li><p>appointment@notinline.com</p></li>
                              <li><p>+91 12345 67899</p></li>
                              <li><p>+91 97642 09752</p></li>
                        </ul>
                  </div>
                  </div>
            </div>
            <hr />
            <div className='footer-bottom-section'>
                  <p className='copy-right'>&copy; 2021-2023 All Rights Reserved</p>
            </div>
      </nav>
)


export default Footer