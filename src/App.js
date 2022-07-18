import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Image from "./components/Image";
import Video from "./components/Video";
import Git from './images/git2.svg';
function App() {
  const [query, setquery] = useState(" ");
  const onchangeof = (e) => {
    setquery(e.target.value);
  };
  console.log(query);
  return (
    <>
    <a href="https://github.com/yung-coder/yung-coder" className="flex justify-center items-center mt-2 md:ml-28" target="blank"><img src={Git} className="w-8 md:w-16" alt="none"/></a>
      <div>
        <div className="flex  w-fit ml-[84px] mt-10 md:ml-[1100px]  ">
          <input
            type="text"
            onChange={onchangeof}
            value={query}
            className="rounded-2xl focus:shadow-lg focus:shadow-black outline-none w-44 md:p-4 md:w-[500px] md:text-xl"
          />
        </div>
        <BrowserRouter>
          {/* <Navbar/> */}
          <Routes>
            <Route path="/" element={<Search value={query} />} />
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/images" element={<Image value={query} />}></Route>
            <Route path="/videos" element={<Video value={query} />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
