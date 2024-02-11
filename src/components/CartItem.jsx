import React, { useState } from "react"
import { IoCloseOutline } from "react-icons/io5"
import ItemCard from "./ItemCard"
import { useSelector } from "react-redux"
import { FaCartShopping } from "react-icons/fa6"

function CartItem() {
  const [activeCart, setActiveCart] = useState(true)
  const cartItems = useSelector((state) => state.cart.cart)
  console.log(cartItems)
  return (
    <>
      <div
        className={`fixed right-0 top-0 sm:w-[20vw] w-full bg-white h-full ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all ease-in-out z-50`}
      >
        <div className='flex justify-between my-3 p-5'>
          <span className='text-gray-600 font-bold'>My Orders</span>
          <IoCloseOutline
            onClick={() => setActiveCart(!activeCart)}
            className='border-2 border-gray-500 text-gray-600 p-1 text-3xl rounded-md hover:text-white hover:bg-slate-800'
          />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            console.log(food)
            return (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            )
          })
        ) : (
          <h2 className='text-center text-xl font-bold text-gray-800'>
            Your cart is empty
          </h2>
        )}

        <div className='absolute bottom-0'>
          <h3 className='font-semibold text-gray-600'>Items:1</h3>
          <h3 className='font-semibold text-gray-600'>Total Amount:1500</h3>
          <hr className='w-[90vw] lg:w-[20vw]' />
          <button className='p-1 lg:w-[20vw] w-full items-center text-white bg-green-500 hover:bg-green-700 rounded-md text-sm'>
            Checkout
          </button>
        </div>
      </div>
      <FaCartShopping
        className='fixed rounded-full bg-white shadow-md text-5xl p-3 bottom-3 right-3 hover:bg-green-600 hover:text-white '
        onClick={() => setActiveCart(!activeCart)}
      />
    </>
  )
}

export default CartItem
