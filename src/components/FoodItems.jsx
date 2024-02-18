import FoodCard from "./FoodCard"
import foodData from "../data/FoodData"
import toast, { Toaster } from "react-hot-toast"
import { useSelector } from "react-redux"

const FoodItems = () => {
  const category = useSelector((store) => store.category.category)
  const handleToast = (name) => toast.success(`${name} added to your cart`)
  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />

      <div className='flex flex-wrap justify-center gap-5'>
        {foodData
          .filter((food) => {
            if (category === "All") {
              return food
            } else {
              return category === food.category
            }
          })
          .map((food) => (
            <FoodCard
              id={food.id}
              key={food.id}
              img={food.img}
              name={food.name}
              price={food.price}
              desc={food.desc}
              category={food.category}
              rating={food.rating}
              handleToast={handleToast}
            />
          ))}
        {/* {foodData.map((food) => {
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
              handleToast={handleToast}
            />
          )
        })} */}
      </div>
    </>
  )
}

export default FoodItems
