/* eslint-disable react/prop-types */
import { GoPlusCircle } from "react-icons/go"
import { FiMinusCircle } from "react-icons/fi"
import { MdDeleteForever } from "react-icons/md"
import { useDispatch } from "react-redux"
import toast from "react-hot-toast"

import {
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "../store/slices/CartSlice"

function ItemCard({ id, name, price, qty, img }) {
  const dispatch = useDispatch()

  const handleRemoveToast = () => {
    toast.success(`${name} removed`, {
      icon: "🫡",
    })
  }

  return (
    <div className='flex gap-2 rounded-lg p-4 shadow-md relative'>
      <MdDeleteForever
        onClick={() => {
          dispatch(removeFromCart({ id }))
          handleRemoveToast()
        }}
        className='absolute right-7 text-lg cursor-pointer hover:text-xl transition-all text-gray-800'
      />
      <img src={img} alt='img' className='w-[50px] h-[50px]' />
      <div className='text-gray-600 font-bold'>
        <h2 className='text-sm'>{name}</h2>
        <div className='flex justify-center'>
          <span className='text-green-600 font-bold'>Rs {price}</span>
          <div className='flex gap-2 absolute right-0'>
            <GoPlusCircle
              onClick={() => dispatch(increaseQty({ id }))}
              className='border-2 rounded-lg border-gray-500 text-gray-600 hover:bg-green-600 hover:text-white p-1 text-3xl cursor-pointer hover:border-none'
            />
            <span>{qty}</span>
            <FiMinusCircle
              onClick={() => dispatch(decreaseQty({ id }))}
              className='border-2 rounded-lg border-gray-500 text-gray-600 hover:bg-green-600 hover:text-white p-1 text-3xl cursor-pointer hover:border-none'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
