import React from 'react';
import styles from '../style';
import GetStarted from './GetStarted';
import logo from '../assets/logo.png';

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-80 py-12 sm:px-16 px-6`}>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            Boost <span className='font-semibold green-gradient'>Profits. </span> <br className='sm:block hidden'/> {" "}
            Drive <span className='font-semibold blue-gradient'>Growth. </span>  
          </h1>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>Sustainably.</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Power your business with renewable energy. We offer tailored energy solutions to help your business grow by reducing costs, and increasing your income streams.
        </p>

      </div>
      
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
)

export default Hero
