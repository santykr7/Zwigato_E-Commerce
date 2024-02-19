import React from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const ProtectedRoutes = ({ element }) => {
  const cartItems = useSelector((store) => store.cart.cart)
  return <div>{cartItems.length > 0 ? element : <Navigate to='/' />}</div>
}

export default ProtectedRoutes
