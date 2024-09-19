import React from 'react';
import lightModeIcon from '../assets/images/light-mode.png';
import nightModeIcon from '../assets/images/night-mode.png';
import { useDarkMode } from '../context/DarkModeContext';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`flex items-center justify-between shadow-md  p-4 sm:px-8 lg:px-12 ${darkMode ? 'bg-darkModeElements text-white' : ' text-lightModeText'}`}>
      <h1 className='text-lg sm:text-2xl font-semibold'>
        Where is the world?
      </h1>
      <button className=' text-lg flex items-center gap-2' onClick={toggleDarkMode}>
        {darkMode ? (
          <img className='w-5 h-5' src={nightModeIcon} alt='Night Mode Icon' />
        ) : (
          <img className='w-5 h-5' src={lightModeIcon} alt='Light Mode Icon' />
        )}
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default Navbar;
