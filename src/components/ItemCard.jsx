import React from "react"
import { GoPlusCircle } from "react-icons/go"
import { FiMinusCircle } from "react-icons/fi"
import { MdDeleteForever } from "react-icons/md"
import { useDispatch } from "react-redux"
import { removeFromCart } from "../store/slices/CartSlice"

function ItemCard({ id, name, price, rating, qty, img }) {
  // const itemAddedToCart = useSelector((store) => store.cart)
  const dispatch = useDispatch()
  console.log(id)

  return (
    <div className='flex gap-2 rounded-lg p-4 shadow-md '>
      <MdDeleteForever
        onClick={() => dispatch(removeFromCart({ id }))}
        className='absolute right-7 text-lg cursor-pointer hover:text-xl transition-all text-gray-800'
      />
      <img src={img} alt='img' className='w-[50px] h-[50px] ' />
      <div className='text-gray-600 font-bold '>
        <h2 className='text-sm'>{name}</h2>
        <div className='flex justify-center'>
          <span className='text-green-600 font-bold'>Rs {price}</span>
          <div className='flex gap-2 absolute right-0'>
            <GoPlusCircle className='border-2 rounded-lg border-gray-500 text-gray-600 hover:bg-green-600 hover:text-white p-1 text-3xl cursor-pointer hover:border-none' />
            <span>{qty}</span>
            <FiMinusCircle className='border-2 rounded-lg border-gray-500 text-gray-600 hover:bg-green-600 hover:text-white p-1 text-3xl cursor-pointer hover:border-none' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
