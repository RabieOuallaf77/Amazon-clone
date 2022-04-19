import React from 'react';
import Product from '../Products__components/Product';
import '../styles/home.css';


function Home() {
  return (
    <div className='home'>
        <div className='home__countainer' >
            {/* Background image */}
            <img 
                src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-US_PVD5676._CB404165680_.jpg"
                alt='amazon prime banner'
                className='home__banner' 
            />
            {/* Products rows */}

            {/* First row */}
            <div className='home__row'>
                <Product />
                <Product />

            </div>
            
            {/* Second row */}
            <div className='home__row'>
                <Product />
                <Product />
                <Product />
            </div>

            {/* Third row */}
            <div className='home__row'>
                <Product />
            </div>
        </div>
      </div>
  )
}

export default Home