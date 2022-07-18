import React from 'react'

const Imagebox = ({items}) => {
  return (
    <div className='flex flex-col justify-center items-center bg-slate-300 mt-3 rounded-md  hover:bg-sky-700 md:h-[210px] '>
      <div className=" border hover:animate-pulse rounded-xl">
            <img src={items.image.src} alt="" className='md:w-fit'/>
          </div>
    </div>
  )
}

export default Imagebox
