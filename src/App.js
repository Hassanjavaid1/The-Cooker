import "./App.css";
import { useContext, useEffect, useState } from "react";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { creatingContext } from "./Components/ContextApi";

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [mainLocation, setmainLocation] = useState("");
  const { setMealData, mealData, location, setLocation } =
    useContext(creatingContext);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const url = `https://themealdb.com/api/json/v1/1/filter.php?a=${
          location || "indian"
        }`;
        const response = await fetch(url);
        const data = await response.json();
        setMealData(data.meals);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
  }, [location]);

  return (
    <>
      <Navbar />
      <Banner />
      <Home />
    </>
  );
}

export default App;
