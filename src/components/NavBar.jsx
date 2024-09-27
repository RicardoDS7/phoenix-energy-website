import { useState } from 'react';
import { navLinks } from '../constants';
import { close, menu, logo } from "../assets"; 


const NavBar = () => {

  const [toggle,setToggle] = useState(false);
  const [hoveredItem,setHoveredItem] = useState(null);

  return (
    <nav className="w-full nav-bar flex py-6 justify-between items-center navbar">
        <a className="flex items-center justify-between" href='#home'>
          <img src={logo} alt="phoenix-energy" className="w-[50px] h-[50px]"/>
          <h2 className='font-poppins font-semibold text-[20px] text-charcoal'>Phoenix <span className='font-poppins font-semibold text-[20px] text-blue_green'>Energy</span></h2>
        </a>

        {/* Desktop Menu */}
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav,index) => (
            <li
              key={nav.id}
              className={`font-poppins font-semibold cursor-pointer custom-underline-offset text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'} text-black relative group`}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <a href={`#${nav.id}`} className='flex items-center'>
                {nav.title}
                {nav.subItems && nav.subItems.length > 0 && (
                  <span class="ml-2  text-xs text-gray-600">▼</span> 
                )}
              </a>
              <div>
              {(hoveredItem === index && nav.subItems.length > 0) && (

                
                  <ul className='absolute min-w-max pt-4 shadow-lg z-10'>
                    {nav.subItems.map((dropDownItem,i) => (
                      <li key={i}>
                      <a
                        href="#"
                        className="block px-4 py-4 text-blue_green bg-white hover:bg-gray-200"
                      >
                        {dropDownItem}
                      </a>
                    </li>
                    ))}
                  </ul>
                
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* Desktop Menu */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} 
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}/>
        </div>

        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar` }>
            <ul className="list-none sm:flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav,index) => (
              <li
                key={nav.id}
                className={`font-poppins relative font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mb-4'} text-black`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>

                
              </li>
            ))}
          </ul>

        </div>
      
    </nav>
  )
}

export default NavBar
