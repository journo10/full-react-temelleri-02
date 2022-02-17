import axios from "axios";
import { useState, useEffect } from "react";

function CountryList({ search }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => setCountries(response.data))
      .catch((err) => console.log({ err }));
  }, []);

  return (
    <>
      {countries
        .filter((c) =>
          c.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((country) => {
          return (
            <div key={country.name} className="country">
              <div>
                <img src={country.flag} alt={country.name} />
              </div>
              <div>
                <h3>{country.name}</h3>
                <p>{country.capital}</p>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default CountryList;
