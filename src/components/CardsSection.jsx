import data from "../data/data.json";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import noDataImg from "../assets/images/no_data.svg";
import { useDarkMode } from "../context/DarkModeContext";
import { CiSearch } from "react-icons/ci";

const CardsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const regions = [...new Set(data.map((item) => item.region))];

  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedRegion === "" || item.region === selectedRegion)
    );
  });

  const handleCardClick = (countryName) => {
    navigate(`/country/${countryName}`);
  };

  const noData = (
    <div className="flex flex-col items-center gap-6 justify-center h-[calc(100vh-64px)]">
      <img className="w-1/2 h-auto bg-gray-10" src={noDataImg} alt="No Data"  />
      <p className="text-lg sm:text-2xl lg:text-3xl font-semibold">No data found</p>
    </div>
  );

  return (
    <div
      className={`px-10 py-8 md:px-20 ${
        darkMode
          ? "bg-darkModeBackground text-white"
          : "bg-lightModeBackground text-lightModeText"
      }`}
    >
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:justify-between">

        <div className={`rounded-md px-4 py-2 shadow-md flex items-center w-full sm:w-1/2 lg:w-1/3 
          ${darkMode ?  "bg-darkModeElements text-white shadow-darkModeElements" : ""}`}>
          <CiSearch className="w-5 h-5" />
          <input
            type="text"
            className={`border-none outline-none rounded-md px-4  py-2 sm:py-4 w-full ${
              darkMode
                ? "bg-darkModeElements text-white  shadow-darkModeElements  "
                : "bg-transparent text-lightModeText  "
            }`}
            placeholder="Search by country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          className={`border-none outline-none rounded-md px-4 py-2 sm:py-4 w-full sm:w-1/2 lg:w-1/4 ${
            darkMode
              ? "bg-darkModeElements text-white shadow-md shadow-darkModeElements "
              : "bg-white text-lightModeText shadow-md"
          }`}
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          <option value="">Filter by region</option>
          {regions.map((region, index) => (
            <option key={index} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      {filteredData.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-10 ">
          {filteredData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-2 rounded-lg shadow-md cursor-pointer  ${
                darkMode
                  ? "bg-darkModeElements text-white"
                  : "bg-lightModeBackground text-lightModeText"
              }`}
              onClick={() => handleCardClick(item.name)}
            >
              <img
                className="size-full rounded-t-lg"
                src={item.flags.png}
                alt={item.name}
              />
              <div className="flex flex-col gap-4 px-6 py-8">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <div className="flex flex-col gap-1">
                  <p>
                    <span className="font-semibold">Population:</span>{" "}
                    {item.population.toLocaleString()}
                  </p>
                  <p>
                    <span className="font-semibold">Region:</span> {item.region}
                  </p>
                  <p>
                    <span className="font-semibold">Capital:</span>{" "}
                    {item.capital}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>{noData}</>
      )}
    </div>
  );
};

export default CardsSection;
