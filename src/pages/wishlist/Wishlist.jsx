
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Products from '../../components/products/Products'

const AddWishlist = () => {
  const heart = useSelector(state => state.wishlist.value)
  useEffect(() => {
    window.scrollTo(0, 0)

  } , [])
  return (
    <div style={{padding:"100px 0"}}>
           <Products data={heart} />  
    </div>
  )
}

export default AddWishlist

