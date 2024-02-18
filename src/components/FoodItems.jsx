import FoodCard from "./FoodCard"
import foodData from "../data/FoodData"
import toast, { Toaster } from "react-hot-toast"
import { useSelector } from "react-redux"
import { store } from "../store/store"

const FoodItems = () => {
  const category = useSelector((store) => store.category.category)
  const search = useSelector((store) => store.search.search)
  console.log(search)
  const handleToast = (name) => toast.success(`${name} added to your cart`)
  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />

      <div className='flex flex-wrap justify-center gap-5'>
        {}
        {foodData
          .filter((food) => {
            if (category === "All") {
              return food.name.toLowerCase().includes(search.toLowerCase())
            } else {
              return (
                category === food.category &&
                food.name.toLowerCase().includes(search.toLowerCase())
              )
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
