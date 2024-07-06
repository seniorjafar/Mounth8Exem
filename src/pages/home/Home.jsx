import React from 'react'
import { Suspense, lazy } from "react";
import Banner from '../../components/banner/Banner'
import Catalog from '../../components/catalog/Catalog'
import NorLight from '../../components/norLight/NorLight'
// import Products from '../../components/products/Products'
const Products = React.lazy(() => import('../../components/products/Products'));
import Footer from '../../components/footer/Footer'
import Blog from '../../components/blog/Blog'
import Text from '../../components/text/Text'
import { useGetProductsQuery } from '../../context/api/productApi'


const Home = () => {
  const { data, } = useGetProductsQuery()
  return (
    <>
      <Banner/>
      <Catalog/>
      <NorLight/>
      <Suspense fallback={<div>Loading...</div>}>
        <Products data={data}/>
      </Suspense>
      <Blog/>
      <Text/>
      <Footer/>
    </>
  )
}

export default Home