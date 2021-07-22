import React, { useState, useEffect } from "react";
import axios from "axios";
// http://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag
const Countries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
      )
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <ul className="countries-list">
        {data.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
