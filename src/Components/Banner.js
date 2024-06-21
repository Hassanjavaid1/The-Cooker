import React, { useContext, useEffect, useState } from "react";
import bg_img from "./demo_img.jpg";
import { creatingContext } from "./ContextApi";
function Banner() {
  const [inputField, setInputField] = useState("");
  const { searchQuery, setSearchQuery, mealData, setMealData } =
    useContext(creatingContext);
  const handleSearchQuery = async () => {
    try {
      const url = `https://themealdb.com/api/json/v1/1/search.php?s=${inputField}`;
      const response = await fetch(url);
      const data = await response.json();
      setMealData(data.meals);
    } catch (err) {
      setMealData("Opps somthing went wrong!");
    }
  };

  return (
    <>
      <div className="container">
        <section>
          <div
            className="background h-[32rem] w-[100vw] bg-no-repeat bg-cover flex items-center justify-center"
            style={{ backgroundImage: `url(${bg_img})` }}
          >
            <div className="text-lg flex items-center">
              <input
                type="search"
                name="search"
                id="search"
                value={inputField}
                onChange={(e) => setInputField(e.target.value)}
                placeholder="Search for meal..."
                className="py-[0.9rem] w-[21rem] pl-3 pr-3 bg-[whitesmoke] focus:border focus:border-[#3c4757] focus:outline-none"
              />
              <button
                onClick={handleSearchQuery}
                className=" bg-[#64748B] p-[0.9rem] text-white"
              >
                Search
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Banner;
