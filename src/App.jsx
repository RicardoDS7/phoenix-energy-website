import React from 'react'
import styles from './style';
import { NavBar, Hero, Stats, Billing, Business, CardDeal, Testimonials, Clients, Footer, CTA } from './components';

const App = () => {
  return (
    <>
    <header>
      <title>Phoenix Energy</title>
    </header>

    <div className='bg-white w-full overflow-hidden'>

        {/* Navigation Bar */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <NavBar />
          </div>

        </div>
      
      {/* Hero Section */}
      <div className={`bg-gray-gradient ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Hero />
        </div>
      </div>

      {/* Hero Section */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing /> 
          <CardDeal /> 
          <Testimonials /> 
          <Clients /> 
          <CTA /> 
          <Footer />
        </div>
      </div>

    </div>
    </>
  )
}

export default App
