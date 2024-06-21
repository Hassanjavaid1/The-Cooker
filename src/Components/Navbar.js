import React, { useContext, useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import "./CSS/style.css";
import { creatingContext } from "./ContextApi";
function Navbar() {
  const { location, setLocation } = useContext(creatingContext);
  const countries = [
    { name: "Indian", code: "IN" },
    { name: "American", code: "US" },
    { name: "Canadian", code: "CA" },
    { name: "British", code: "GB" },
    { name: "German", code: "DE" },
    { name: "French", code: "FR" },
    { name: "Italian", code: "IT" },
    { name: "Spanish", code: "ES" },
    { name: "Australian", code: "AU" },
    { name: "Brazilian", code: "BR" },
    { name: "Chinese", code: "CN" },
    { name: "Japanese", code: "JP" },
    { name: "Mexican", code: "MX" },
    { name: "Russian", code: "RU" },
  ];

  useEffect(() => {
    const { name } = countries || [];
    setLocation(name);
  }, []);

  return (
    <>
      <nav>
        <div className="nav-container flex justify-center items-center gap-[51%] bg-slate-500 text-white p-5">
          <h1 className="text-4xl font-semibold">THE COOKER!</h1>
          <div className="text-lg flex items-center gap-8">
            <a href="/">Home</a>
            <select
              onChange={(event) => setLocation(event.target.value)}
              value={location}
              className="selectCountry bg-[#46505e] transition outline-none flex items-baseline flex-col text-[1rem] h-9 overflow-hidden"
            >
              {countries.map(({ name }) => (
                <option value={name}>{name}</option>
              ))}
            </select>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
