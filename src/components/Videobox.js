import React from "react";
import Yt from '../images/youtube.png';
const Videobox = ({item}) => {
  return (
    <div className="bg-black text-white mt-3 flex flex-col justify-center break-words md:h-[200px]">
      <h1 className="text-xl font-bold md:text-5xl">{item.title}</h1>
      <p className="md:text-2xl md:mt-2">{item.description}</p>
      <a href={item.link} className="w-6 mt-1 md:mt-2"><img src={Yt} alt="Watch now" /></a>
    </div>
  );
};

export default Videobox;
