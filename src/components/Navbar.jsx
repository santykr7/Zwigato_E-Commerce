import React from "react"
import { useDispatch } from "react-redux"
import { searchHere } from "../store/slices/searchSlice"

const Navbar = () => {
  const dispatch = useDispatch()

  return (
    <nav className='flex flex-col lg:flex-row justify-between mx-6 py-3'>
      <div>
        <h3 className='text-xl font-bold text-gray-600'>
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className='text-2xl font-bold'>Zwigato</h1>
      </div>
      <div className=''>
        <input
          className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]'
          type='search'
          name=''
          id=''
          placeholder='Search Here'
          onChange={(e) => dispatch(searchHere(e.target.value))}
          autoComplete='off'
        />
      </div>
    </nav>
  )
}

export default Navbar
