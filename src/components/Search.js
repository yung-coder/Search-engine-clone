import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import Searchbox from "./Searchbox";
import Navbar from "./Navbar";
import Icon from '../images/search.svg';
const Search = ({ value }) => {
  const [contanier, setcontanier] = useState([]);
  const URL = `https://google-search3.p.rapidapi.com/api/v1/search/q=${value}`;
  const options = {
    method: "GET",
    headers: {
      "X-User-Agent": "desktop",
      "X-Proxy-Location": "US",
      'X-RapidAPI-Key': 'b9a0c685a2msh5bf163e83dc21aep11615bjsn2ab52f997e4e',
    'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
    },
  };

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    try {
      const response = await axios.get(URL, options);
      console.log(response.data.results);
      return setcontanier(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex">
        <button onClick={getdata} className="ml-72 -mt-8 hover:animate-bounce md:ml-[1650px] md:-mt-14 "><img src={Icon} alt="search" className="w-6 md:w-14"/></button>
      </div>
      <Navbar/>
      {contanier.map((item) => {
        return (
          // <>
          // <div className="text-white">
          //   <h1>{item.title}</h1>
          //   <a href={item.link}>Link</a>
          // </div>
          // </>
          <Searchbox item={item} />
        );
      })}
    </div>
  );
};

export default Search;
