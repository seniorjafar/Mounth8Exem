import React, { useEffect } from 'react'
import './Cart.scss'

import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'

import { BiMinus, BiPlus } from 'react-icons/bi'
import { IoTrashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux'
import { decrementCart, deleteAllCart, incrementCart, removeFromCart } from '../../context/slices/CartSlice'
import Empty from '../../empty/Empty'
import { useGetInputValue } from '../../hooks/useGetInputValue'
import { toast } from 'react-toastify'



const initialState = {

  fname : "" ,
  text : "" ,
  tel : "" ,
  email : "" ,
  adress : "" ,
}


const BOT_TOKEN = '7169662666:AAGgjFzWPypZwEhit-01km66K6WC9at7LBc'
const chatId = '-1002075635970'



const Cart = () => {

  useEffect(() => {
    window.scrollTo(0, 0)

  } , [])
  
const cart = useSelector(state => state.cart.value)

  const dispatch = useDispatch()
  

  
  const {formData , handleChange , setFormData} = useGetInputValue(initialState)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formData)
    setFormData(initialState)
    let texts = 'Buyurtma %0A%0A'
    texts += `fname : ${formData.fname} %0A%0A `
    texts += `adress : ${formData.adress} %0A%0A ` 
    texts += `email : ${formData.email} %0A%0A `
    texts += `text : ${formData.text} %0A%0A ` 
    texts += `tel : ${formData.tel} %0A%0A ` 
    
  
  
    
    let url  = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${chatId}&text=${texts}`
    let api = new XMLHttpRequest()
    api.open('GET' , url , true)
    api.send()
    dispatch(deleteAllCart())
    toast.success('Спасибо за покупку')
  }  





  let cartItems = cart?.map((item) => (
    <div key={item.id} className="cart__card">
        <div className="img">
          <img src={item?.url[1]} alt="" />
        </div>
        <div className="dffc">
            <span>
              <p>{item.title}</p>
              <h3>{item.price}</h3>
            </span>
        <h4>{item.desc}</h4>
        <h4>RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS</h4>
        <div className="counts">
            <button disabled={item.quantity <= 1} onClick={() => dispatch(decrementCart(item))}><BiMinus/></button>
            <p>{item.quantity}</p>
            <button onClick= {() => dispatch(incrementCart(item))}><BiPlus/></button>
            <button onClick={() => dispatch(removeFromCart(item.id))} className='delete'><IoTrashOutline />
            </button>
        </div>
        </div>
</div>
  ))

  return (
    <>
    {
      cart.length ? 

      <div className="cart">
         <div className="container">
             <div className="cart__title">
                  <Link to={'/'}>Главная</Link>
                  <MdKeyboardArrowRight/>
                  <Link to={'/catalog'}>Каталог</Link>
                  <MdKeyboardArrowRight/>
                  <p>Корзина</p>
             </div>
             <div className="cart__content">
                <h1>Корзина</h1>
                <div className="cart__products">
                    <div className="cart__products__title">
                        <p>Фото</p>
                        <p>Товары</p>
                        <p>Описание</p>
                        <p>Артикул</p>
                        <p>Количество</p>
                    </div>
                      {cartItems}
                </div>
             </div>
             <div className="decor">
                 <h2>Оформление</h2>
                 <form onSubmit={handleSubmit} action="">
                    <div className="df">
                      <input value={formData.fname} onChange={handleChange} name='fname' required  type="text" placeholder='ФИО'/>
                      <input value={formData.tel} onChange={handleChange} name='tel' required type="number" placeholder='телефон' />
                      <input value={formData.email} onChange={handleChange} name='email' required type="email" placeholder='Электронная почта' />
                    </div>
                    <div className="delivery">
                        <h2>Доставка</h2>
                        <input value={formData.adress} onChange={handleChange}   name='adress' required type="text" placeholder='Адрес доставки' />
                        <textarea value={formData.text} onChange={handleChange}  name="text" required  placeholder='Комментарий' id=""></textarea>
                          </div>
                  <div className="payment">
                      <h2>Оплата</h2>
                      <div className="dfp">
                      <span>
                        <p>Товары..........................</p>
                        <p>12 300₽</p>
                      </span>
                      <span>
                        <p>Доставка................................</p>
                        <p>12 300₽</p>
                      </span>
                      </div>
                      <h3>12822$</h3>
                      <div className="dfb">
                        <button>Купить</button>
                          <span>
                          <input required type="checkbox" />
                          <p>Я согласен наобработку моих персональных данных</p>
                          </span>
                      </div>
             </div>
                 </form>
             </div>
         </div>
      </div>
      :
      <Empty text={"корзина"}/>
    }
    </>
  )
}

export default Cart