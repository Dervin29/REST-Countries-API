import React from 'react';
import data from '../data/data.json';
import arrow from '../assets/images/arrow.png';
import arrow_light from '../assets/images/left-arrow.png';
import { useParams } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';
import { useNavigate } from 'react-router-dom';

const CountryDetail = () => {
  const { name } = useParams();
  const country = data.find(item => item.name === name);
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <section className={`  flex flex-col justify-center items-center min-h-[calc(100vh-64px)] p-4 lg:px-12 ${darkMode ? 'bg-darkModeBackground text-white' : 'text-lightModeText'}`} >
      <div className="w-full flex justify-start sm:px-6 lg:px-2">
        <button
          className={`flex items-center gap-4 font-semibold px-6 py-2 mb-8 rounded-md ${darkMode ? 'text-white bg-darkModeElements shadow-md shadow-darkModeElements' : 'text-lightModeText shadow-md'}`}
          onClick={() => navigate(-1)}
        >
          {darkMode ? (
            <img className="w-5 h-5" src={arrow} alt="Arrow Icon" />
          ) : (
            <img className="w-5 h-5" src={arrow_light} alt="Arrow Icon" />
          )}
          Back
        </button>
      </div>
      <div className='grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 '>
        {/* Flag */}
        <img src={country.flags.png} alt={country.name} className='w-full h-auto' />

        {/* Country Details */}
        <div className='flex flex-col justify-center gap-4 '>
          <h1 className='text-3xl font-bold'>{country.name}</h1>

          {/* Grid for Country Information */}
          <div className='grid lg:grid-cols-2 gap-8 '>
            {/* First Column */}
            <div className='flex flex-col gap-2'>
              <p className={`${darkMode ? 'text-lightModeInput' : 'text-black'} text-lightModeInput`}><span className={`font-semibold ${darkMode ? 'text-white' : 'text-black'} `}>Native Name: </span> {country.nativeName}</p>
              <p className={`${darkMode ? 'text-lightModeInput' : 'text-black'} text-lightModeInput`}><span className={`font-semibold ${darkMode ? 'text-white' : 'text-black'} `}>Population: </span> {country.population.toLocaleString()}</p>
              <p className={`${darkMode ? 'text-lightModeInput' : 'text-black'} text-lightModeInput`}><span className={`font-semibold ${darkMode ? 'text-white' : 'text-black'} `}>Region: </span> {country.region}</p>
              <p className={`${darkMode ? 'text-lightModeInput' : 'text-black'} text-lightModeInput`}><span className={`font-semibold ${darkMode ? 'text-white' : 'text-black'} `}>Sub Region: </span> {country.subregion}</p>
              <p className={`${darkMode ? 'text-lightModeInput' : 'text-black'} text-lightModeInput`}><span className={`font-semibold ${darkMode ? 'text-white' : 'text-black'} `}>Capital: </span> {country.capital}</p>
            </div>

            {/* Second Column */}
            <div className='flex flex-col gap-2'>
              <p className={`${darkMode ? 'text-lightModeInput' : 'text-black'}  `}>
                <span className={`font-semibold ${darkMode ? 'text-white' : 'text-black'} `}>Top Level Domain: </span>
                {country.topLevelDomain?.join(', ') || 'N/A'}
              </p>
              <p className={`${darkMode ? 'text-lightModeInput' : 'text-black'}  `}>
                <span className={`font-semibold ${darkMode ? 'text-white' : 'text-black'} `}>Currencies: </span>
                {country.currencies?.map(c => `${c.name} (${c.symbol})`).join(', ') || 'N/A'}
              </p>
              <p className={`${darkMode ? 'text-lightModeInput' : 'text-black'}  `}>
                <span className={`font-semibold ${darkMode ? 'text-white' : 'text-black'} `}>Languages: </span>
                {country.languages?.map(l => l.name).join(', ') || 'N/A'}
              </p>
            </div>
          </div>

          {/* Border Countries */}
          <div className='mt-4'>
            <span className='font-semibold'>Border Countries:</span>
            <div className='flex flex-wrap gap-2 mt-2'>
              {country.borders?.length > 0 ? (
                country.borders.map((border, index) => (
                  <span key={index} className={` px-10  py-1 rounded-md shadow-md ${darkMode ? 'bg-darkModeElements text-darkModeText shadow-md shadow-darkModeElements' : 'text-lightModeText'}`}>
                    {border}
                  </span>
                ))
              ) : (
                <span>None</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetail;
