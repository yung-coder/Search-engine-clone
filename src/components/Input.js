import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Search from '../images/search.gif';
import Searchcomp from '../components/Search'
const Input = () => {
  const [query,setquery]=useState(" ");
  const change=(e)=>{
    setquery(e.target.value);
  }
 
  return (
    <div className='flex justify-center'>
      <img src={Search} className="w-32 h-32 -mr-40 mt-36"/>
        <div className='flex flex-row justify-between text-white k  mt-[350px] space-x-3'>
            
            <Searchcomp />
            <Link to="/home"><i class="fa-solid fa-magnifying-glass"></i></Link>  
        </div>
    </div>
  )
}

export default Input