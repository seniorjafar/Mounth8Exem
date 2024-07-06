import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import SingleRout from './pages/singleRout/SingleRout'
import AllProducts from './pages/allProducts/AllProducts'
import Wishlist from './pages/wishlist/Wishlist'
import About from './pages/about/About'
import Shipping from './pages/shipping/Shipping'
import Return from './pages/return/Return'
import Garant from './pages/garant/Garant'
import Contact from './pages/contact/Contact'
import BlogPage from './pages/blogpage/BlogPage'
import Login from "./pages/login/Login";
import Cart from './pages/cart/Cart'
import Admin from "./pages/admin/Admin";
import CreateProduct from "./pages/createProduct/Createproduct";
import CreateCategory from "./pages/createCategory/Createcategory";
import ManageCategory from "./pages/manageCategory/Managecategory";
import ManageProduct from "./pages/manageProduct/Manageproduct";

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
         <Route path='/shipping-payment' element={<Shipping/>}/>
         <Route path='/return' element={<Return/>}/>
         <Route path='/garant' element={<Garant/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/blog' element={<BlogPage/>}/>
         <Route path="/login" element={<Login />} />
         <Route path='/cart' element={<Cart/>}/>
          <Route path="/admin" element={<Admin />}>
            <Route path="createproduct" element={<CreateProduct />} />
            <Route path="manageproduct" element={<ManageProduct />} />
            <Route path="createcategory" element={<CreateCategory />} />
            <Route path="managecategory" element={<ManageCategory />} />
          </Route>
      </Routes>
    </>
  )
}

export default App
