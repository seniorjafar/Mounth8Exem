import React from 'react'
import './AllProducts.scss'
import Products from '../../components/products/Products'
import { useGetProductsQuery } from '../../context/api/productApi'

const AllProducts = () => {
  const { data } = useGetProductsQuery()

console.log(data);

  return (
    <>
    <div className="allProducts">
      <div className="container">
         <Products sliceCount={Infinity} data={data} /> 
      </div>
    </div>
    </>
  )
}

export default AllProducts