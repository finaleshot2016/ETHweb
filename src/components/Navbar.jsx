import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import terminal from '../assets/dogethstylenav.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='bg-black'>
      <div className='bg-transparent bg-opacity-100 max-w-[1640px] mx-auto px-4 flex justify-between items-center h-full '>
        <div className=''>
        <a href="/"><img className='max-w-[300px]' src={terminal} alt="/" /></a>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex text-white items-center'>
            <li><a href="#roadmap">Road Map</a></li>
            <li><a href="#tokenomics">About</a></li>
            <li><a href="https://t.me/DogETHStyle" target="_blank" rel="noopener noreferrer">Telegram</a></li>
            <li><a href="https://twitter.com/DOGETHSTYLE" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://medium.com/@TrueAlpha/awakening-49644a5d220" target="_blank" rel="noopener noreferrer">Medium</a></li>
            <li><a href="https://app.uniswap.org/#/swap?outputCurrency=0x8654da8a6f678f2ffb1c99f53b8eb155bf5ed9d2&chain=mainnet" target="_blank" rel="noopener noreferrer">Buy</a></li>
            <li><a href="mailto:dogethstyle@gmail.com" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
            <button className='m-2 bg-white hover:bg-pink-500 text-black font-bold py-2 px-4 rounded'><a href="http://dogestyleapp.com/" target="_blank" rel="noopener noreferrer">Dashboard</a></button>
          </ul>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}
          
          
        </div>

        {/* Mobile Menu */}
        <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 
    'absolute left-[-100%]'}>
          <ul>
            <li className='text-2xl'>Road Map</li>
            <li className='text-2xl'>Twitter</li>
            <li className='text-2xl'>Telegram</li>
            <li className='text-2xl'>About</li>
            <button className='m-8'>Buy</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
