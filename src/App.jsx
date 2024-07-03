import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import SingleRout from './pages/singleRout/SingleRout'
import AllProducts from './pages/allProducts/AllProducts'
import Wishlist from './pages/wishlist/Wishlist'
import About from './pages/about/About'
import ShippingAndPayment from './pages/shippingAndPayment/ShippingAndPayment'
import Return from './pages/return/Return'
import Garant from './pages/garant/Garant'
import Contact from './pages/contact/Contact'
import Blog from './pages/blogpage/BlogPage'
import BlogPage from './pages/blogpage/BlogPage'

function App() {

  return (
    <>
      <Header/>  
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path='/products/:id' element={<SingleRout/>}/>
         <Route path='/all-products' element={<AllProducts/>}/>
         <Route path='/wishlist' element={<Wishlist/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/shipping-payment' element={<ShippingAndPayment/>}/>
         <Route path='/return' element={<Return/>}/>
         <Route path='/garant' element={<Garant/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/blog' element={<BlogPage/>}/>
      </Routes>
    </>
  )
}

export default App
