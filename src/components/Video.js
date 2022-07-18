import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Videobox from "./Videobox";
import Icon from '../images/search.svg';
const Video = ({ value }) => {
  const [query, setquery] = useState(" ");
  const [contanier, setcontanier] = useState([]);
  const URL = `https://google-search3.p.rapidapi.com/api/v1/video/q=${value} | ${query}`;
  const options = {
    method: "GET",
    headers: {
      "X-User-Agent": "desktop",
      "X-Proxy-Location": "US",
      "X-RapidAPI-Key": "66e17f9775msh52ab94609039378p183539jsned52ecf69948",
      "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
    },
  };

  useEffect(() => {
    if(query==' '&& value==' '){
      return;
    }
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

  const onchangeof = (e) => {
    setquery(e.target.value);
  };
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
      <Navbar />
      {contanier.map((item) => {
        return (
          <>
            <Videobox item={item} />
          </>
        );
      })}
    </div>
  );
};

export default Video;
