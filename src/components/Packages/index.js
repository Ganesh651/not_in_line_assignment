import {v4 as uuidv4} from 'uuid'
import PackageCard from '../PackageCard'
import './index.css'

const packagesList = [
      {     id: uuidv4(),
            packageName: "Basic Full Body Checkup",
            rating:4.3,
            reviews:"75 Reviews",
            numberOfTests: 53,
            originalPrice: "10,000",
            discountPrice: "84,90"
      },
       {    id: uuidv4(),
           packageName: "Advanced Full Body Checkup",
            rating:4.7,
            reviews:"100 Reviews",
            numberOfTests: 70,
            originalPrice: "12,000",
            discountPrice: "10,000"
      },
       {    id: uuidv4(),
            packageName: "Liver Function Test (LFT)",
            rating:4.3,
            reviews:"43 Reviews",
            numberOfTests: 89,
            originalPrice: "13,299",
            discountPrice: "11,299"
      }
]

const Packages = ()=>(
      <div className='top-packages-container'>
            <div className='heading-section'>
            <h1 className='heading'>Top <span className="best-in-class">packages</span></h1>
            <p className='packages-description'>Explore our wide range of tests! We ensure that you don’t miss out on any chance to keep yourself healthy.</p>
            </div>
            <ul className='packages-list-container'>
                  {packagesList.map(eachPackage=>(
                        <PackageCard eachPackage={eachPackage} key={eachPackage.id} />
                  ))}
            </ul>
      </div>
)


export default Packages