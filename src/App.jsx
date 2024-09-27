import React from 'react'
import styles from './style';
import { NavBar, Hero, Stats, Billing, Business, CardDeal, Testimonials, Clients, Footer, CTA } from './components';
import Banner from './assets/home_page_banner.png';

const App = () => {
  return (
    <>
    <header>
      <title>Phoenix Energy</title>
    </header>

    <div className='bg-white w-full overflow-hidden z-10 '>

          {/* The overlay */}
          <img className="absolute top-0 w-full h-screen object-cover transform scale-x-[-1]" src={Banner} alt='banner' />
          <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

          {/* Navigation Bar */}
          <div className={`${styles.flexCenter} bg-white`}>
            <div className="bg-white bg-opacity-90 w-full z-10">
              <NavBar />
            </div>
          </div>
  

          <div className='relative'>
            <Hero />
          </div>

          
      </div>

    </>
  )
}

export default App
