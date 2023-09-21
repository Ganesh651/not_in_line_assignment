import {AiFillStar} from 'react-icons/ai'
import {BsCurrencyRupee} from 'react-icons/bs'
import './index.css'


const PackageCard = props =>{
      const {eachPackage} = props
      const {
            packageName,
            rating,
            reviews,
            numberOfTests,
            originalPrice,
            discountPrice
      } = eachPackage

      return <li className='package-card'>
                        <h3 className='package-name'>{packageName}</h3>
                        <div className='rating-container'>
                              <h6 className='rating'>{rating}</h6>
                              <AiFillStar className='star-icon'/>
                              <p className='reviews'>{`(${reviews})`}</p>
                        </div>
                        <h4 className='number-of-tests'>Number of tests - {numberOfTests}</h4>
                        <div className='price-container'>
                        <p className='original-price'>MRP: <span className='original-price-span'>{originalPrice}</span></p>
                        <div className='discount-price-container'>
                              <BsCurrencyRupee/>
                              <span className='discount-price'>{discountPrice}</span>
                        </div> 
                        </div>
                        <div className='book-now-button-container'>
                        <button type="button" className='book-now-button'>Book Now</button>
                        </div>
                  </li>
}


export default  PackageCard