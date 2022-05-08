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

                <Product
                id={102}
                title={"IGO is the enemy"}
                price={12.5}
                rating={"4.8"}
                img={'https://m.media-amazon.com/images/I/41o0Fkf+vfL._SY346_.jpg'}
            

                 />
                 {/*----*/}
                <Product 
                id={23}
                title={"GUUFJAHAOE Dog Grooming Clippers kit Low Noise Cordless Clippers Electric Quiet with USB Rechargeable Pets Hair Trimmers Dog Grooming Supplies Shaver Shears Dog Nail Clippers for Dogs Cats"}
                price={23.99}
                rating={4.4}
                img={'https://m.media-amazon.com/images/I/716pBhRbheL._AC_UL320_.jpg'}
                />

            </div>
            
            {/* Second row */}
            <div className='home__row'>
                {/*----*/}
                <Product 
                    id={65}
                    title={"Animal Farm Illustrated - 75th Anniversary Edition (Penguin Modern Classics)"}
                    price={15}
                    rating={4}
                    img={"https://images-na.ssl-images-amazon.com/images/I/91LUbAcpACL.jpg"}
                />
                {/*----*/}
                <Product 
                    id={56}
                    title={"The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life"}
                    price={14}
                    rating={4.5}
                    img={"https://images-na.ssl-images-amazon.com/images/I/516pmXNNmCL._SX324_BO1,204,203,200_.jpg"}
                />
                {/*----*/}
                <Product 
                    id={15}
                    title={'FANTASYLAB Big and Tall Gaming Chair 400lb Gaming Chair Massage Gaming Chair Memory Foam Adjustable Tilt Back Angle and 3D Arms High Back Leather Racing Executive Computer Desk Office Chair (Panda)'}
                    price={109.99}
                    rating={4.6}
                    img={"https://m.media-amazon.com/images/I/91PMbFh2dxL._AC_UL320_.jpg"}
                />
            </div>

            {/* Third row */}
            <div className='home__row'>
                <Product 
                    id={12}
                    title={'"Westinghouse 34" UWQHD 3440x1440 ADM FreeSync Curved Gaming Monitor, FPS & RTS, RGB Lights, VESA, HDMI (2X)"'}
                    price={429}
                    rating={4.9}
                    img={"https://m.media-amazon.com/images/I/71jgYEusJUL._AC_SX679_.jpg"}
                />
            </div>
        </div>
      </div>
  )
}

export default Home