import React from "react"
import FoodCard from "./FoodCard"
import foodData from "../data/FoodData"

const FoodItems = () => {
  console.log(foodData)
  return (
    <div className='flex flex-wrap justify-center gap-5'>
      {foodData.map((food) => {
        return (
          <FoodCard
            id={food.id}
            key={food.id}
            img={food.img}
            name={food.name}
            price={food.price}
            desc={food.desc}
            category={food.category}
            rating={food.rating}
          />
        )
      })}
    </div>
  )
}

export default FoodItems
