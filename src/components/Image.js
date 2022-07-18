import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Imagebox from "./Imagebox";
import Icon from "../images/search.svg";
const Image = ({ value }) => {
  const [query, setquery] = useState(' ');
  const [contanier, setcontanier] = useState([]);
  const URL = `https://google-search3.p.rapidapi.com/api/v1/image/q=${value}| ${query}`;
  const options = {
    headers: {
      "X-User-Agent": "desktop",
      "X-Proxy-Location": "EU",
      "X-RapidAPI-Key": "b9a0c685a2msh5bf163e83dc21aep11615bjsn2ab52f997e4e",
      "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
    },
  };

  useEffect(() => {
    if(query==' ' && value==' '){
      return;
    }
    getdata();
  }, []);

  const getdata = async () => {
    try {
      const response = await axios.get(URL, options);
      console.log(response.data.image_results);
      return setcontanier(response.data.image_results);
    } catch (error) {
      console.log(error);
    }
  };

  const onchangeof = (e) => {
    setquery(e.target.value);
  };
  console.log(query);
  return (
    <div>
      <div className="flex">
        <button
          onClick={getdata}
          className="ml-72 -mt-7 md:ml-[1650px] md:-mt-14"
          onChange={onchangeof}  
        >
          <img src={Icon} alt="search" className="w-6 md:w-14" />
        </button>
      </div>
      <div className="">
        <Navbar />
      </div>
      {contanier.map((items) => {
        return (
          <>
            <Imagebox items={items} />
          </>
        );
      })}
    </div>
  );
};

export default Image;
