/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { addToCart } from "../store/slices/CartSlice"

function FoodCard({ id, img, name, price, desc, rating, handleToast }) {
  const dispatcher = useDispatch()

  const handleAddBtn = () => {
    dispatcher(addToCart({ id, name, price, rating, img, qty: 1 }))
    handleToast(name)
  }
  return (
    <>
      <div className='font-bold w-[250px] bg-white p-8 flex flex-col rounded-lg'>
        <img
          src={img}
          alt='img'
          className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all ease-out'
        />
        <div className='text-sm flex justify-between mt-5'>
          <h2>{name}</h2>
          <span className='text-green-500 '>Rs {price}</span>
        </div>
        <p className='text-sm font-normal'>{desc.slice(0, 70)}...</p>
        <div className='text-sm flex justify-between'>
          <span className='flex'>
            <FaStar className='mr-1 text-yellow-400' />
            {rating}
          </span>
          <button
            onClick={handleAddBtn}
            className='p-1 text-white bg-green-500 hover:bg-green-700 rounded-md text-sm'
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  )
}

export default FoodCard
