import React from "react"
import Navbar from "../components/Navbar"
import CategoryMenu from "../components/CategoryMenu"
import FoodItems from "../components/FoodItems"
import CartItem from "../components/CartItem"

const Home = () => {
  return (
    <div>
      <Navbar />
      <CartItem />
      <CategoryMenu />
      <FoodItems />
    </div>
  )
}

export default Home
