import React from "react"

const CategoryMenu = () => {
  return (
    <div>
      <h3>Find best fodd</h3>
      <div className='my-5 flex overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
        <button className='mx-3 px-3 py-1 font-bold outline-none rounded-md hover:bg-green-500 hover:text-white'>
          All
        </button>
        <button className='mx-3 px-3 py-1 font-bold outline-none rounded-md hover:bg-green-500 hover:text-white'>
          Lunch
        </button>
        <button className='mx-3 px-3 py-1 font-bold outline-none rounded-md hover:bg-green-500 hover:text-white'>
          Breakfast
        </button>
        <button className='mx-3 px-3 py-1 font-bold outline-none rounded-md hover:bg-green-500 hover:text-white'>
          Dinner
        </button>
        <button className='mx-3 px-3 py-1 font-bold outline-none rounded-md hover:bg-green-500 hover:text-white'>
          Snacks
        </button>
      </div>
    </div>
  )
}

export default CategoryMenu
