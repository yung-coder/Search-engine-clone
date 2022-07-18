import React from "react";

const Searchbox = ({ item }) => {
  return (
    <div>
      <div className="text-slate-200 bg-black mt-4 flex flex-col justify-center w-full h-full break-words md:h-[200px]">
        <h1 className="text-xl md:text-5xl">{item.title}</h1>
        <p className="text-base md:text-2xl md:mt-2">{item.description}</p>
        <a href={item.link} target="blank" className="text-blue-800 md:text-xl md:mt-2">Go to page</a>
      </div>
    </div>
  );
};

export default Searchbox;
