import React, { useEffect, useState } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/image/logo.png'
import { useGetProductsQuery } from '../../context/api/productApi'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch , CiHeart , CiShoppingCart} from "react-icons/ci";
import { TbAntennaBars5 } from "react-icons/tb";
import { useLocation } from "react-router-dom";


const Header = () => {
 



  const [searchValue , setSearchValue] = useState("")
  const [filterData, setFilterData] = useState(null)


  const {data} = useGetProductsQuery()
  

useEffect(() => {
  console.log('Effect triggered. SearchValue:', searchValue, 'Data:', data);
  if(data){
    const filtered = data.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()));
    console.log('Filtered data:', filtered);
    setFilterData(filtered);
  }
}, [searchValue, data])



  const handleClear = () => {
    console.log('Clearing search');
    setSearchValue("")
  }


const searchItems = filterData?.map(product => (
  <Link onClick={() => {
    console.log('Link bosildi');
    handleClear();
  }} key={product.id} to={`/products/${product.id}`}>
    <img src={product.url[0]} alt="" />
    <p>{product.title}</p>
  </Link>
))

  let [burger, setBurger] = useState(false)

  let { pathname } = useLocation();
  if (
    pathname === "/admin" ||
    pathname === "/admin/createproduct" ||
    pathname === "/admin/manageproduct" ||
    pathname === "/admin/managecategory" ||
    pathname === "/admin/createcategory"
  ) {
    return <></>;
  }

  return (
    <>
    <header>
      <div className="container">     
          <div className="navbar">
              <div className="nav__top">
                  <div className="top__list">
                    <ul className={burger ? "show" : ""} >
                      <div className='links'>
                        <Link onClick={() => setBurger(p => !p) }   to="/about">О компании</Link>
                        <Link onClick={() => setBurger(p => !p) }  to="/shipping-payment">Доставка и оплата</Link>
                        <Link onClick={() => setBurger(p => !p) }  to="/return">Возврат</Link>
                        <Link onClick={() => setBurger(p => !p) }  to="/garant">Гарантии</Link>
                        <Link onClick={() => setBurger(p => !p) }  to="/contact">Контакты</Link>
                        <Link onClick={() => setBurger(p => !p) }  to="/blog">Блог</Link>
                      </div>
                      <div  className="media-btn">
                        <button><RxHamburgerMenu />
                        Каталог</button>
                      </div>
                      <div className="top__tel">
                          <p>8 (800) 890-46-56</p>
                          <Link onClick={() => setBurger(p => !p) } >Заказать звонок</Link>
                      </div>
                    </ul>
                  </div>
              </div>
              <div className="nav__bottom">
                <div className="nav__logo">
                  <div>
                    <button onClick={() => setBurger(p => !p) } className="burger">
                     <RxHamburgerMenu/>
                    </button>
                  </div>
                  <Link to={"/"}>
                    <img src={logo} alt="" />
                    <h2>NORNLIGHT</h2>
                  </Link>
                </div>
                <div className="nav__inp">
                   <button><RxHamburgerMenu />
                   Каталог</button>
                   <div className='inp__content'>
                    <div className="inp">
                        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Поиск по товарам" />                 <CiSearch />
                    </div>
                    {
    searchValue.trim() ?
    <div className="inp__modul">
      {searchItems}
    </div>
    :
    <></>
  }

                   </div>
                </div>
                <div className="nav__icons">
                   <span>
                       <Link to={'/wishlist'}>
                        <CiHeart />
                          <p>Избранное</p>
                        </Link>
                   </span>
                   <span>
                      <Link to={'/'}>
                        <TbAntennaBars5 />
                        <p>Сравнение</p>
                      </Link>
                   </span>
                   <span>
                      <Link to={'/cart'}>
                        <CiShoppingCart />  
                        <p>Корзина</p>
                      </Link>
                   </span>
                </div>
              </div>
              <div className="media__inp">
                {/* <div className="inp__content"> */}
                  <span className='inp__span'>
                    <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder='Поиск по товарам' />
                    <CiSearch />
                  </span>
                  {
                        searchValue.trim() ?
                      <div className="inp__modul">
                        {
                          searchItems
                        }
                      </div>
                        :
                      <></>
                      }
                  </div>
              {/* </div> */}
              
          </div>
      </div>
    </header>
    </>
  )
}

export default Header