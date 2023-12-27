import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [country, setCountry] = useState(null)
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=fe4feefa8543e06d4f3c66d92c61b69c&units=metric`;
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main);
      setCountry(resJson.sys)
    };

    fetchApi();
  }, [search]);

  return (
    <><div className="serchdiv">
      <input
        placeholder="Fastest Serch"
        type="search"
        className="inputFeild"
        onChange={(event) => { setSearch(event.target.value) }} />
    </div>
      <div className="maindiv">


        {!city && !country ? (
          <p>No Data Found</p>) : (
          <div>
            <div className="heading">
              {search.toUpperCase()}
            </div>
            <h1 className="temp">{city.temp}° C</h1>
            <h3 className="tempmin_max"> Min : {city.temp_min}° C |   Max: {city.temp_max}° C</h3>
            <h3 className="tempmin_max">Country {country.country} </h3>
          </div>

        )}

      </div>


    </>
  );
}

export default App;
