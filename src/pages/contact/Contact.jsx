import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Link } from 'react-router-dom'
import './Contact.scss'
const Contact = () => {
   const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2240.472744821308!2d37.54781081590829!3d55.87000998058494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5389d2b7c8a9f%3A0x1a4662fdf6d8dc1!2z0JTQvNC40YLRgNC-0LLRgdC60L7QtSDRiC4sIDEwMNGBMiwg0JzQvtGB0LrQstCwLCAxMjc1NzQ!5e0!3m2!1sru!2sru!4v1623252357673!5m2!1sru!2sru";

  return (
    <>
      <div className="contact">
        <div className="container">
            <div className="contact__title">
                    <Link to={'/'}>Главная</Link>
                    <MdKeyboardArrowRight/>
                    <p>Контакты</p>
            </div>
            <div className="contact__content">
                <h1>Контакты</h1>
                <div className="contact__text">
                    <h2>8 (800) 890-46-56</h2>
                    <p>Пн-Пт: 10:00 до 19:00 Сб-Вс: заказ через корзину <br />Телефоны:  </p>
                </div>
             </div>
         </div>
         <div className="iframe">
            <iframe 
              src={mapUrl} 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
            <div className="contact__iframe">
                <div className="if__card">
                    <h2>Адрес магазина</h2>
                    <p>г. Москва, Дмитровское шоссе д.100с2</p>
                </div>
                <div className="if__card">
                    <h2>Почта</h2>
                    <p>NORNLIGHT@mail.ru</p>
                </div>
                <div className="if__card">
                    <h2>Телефон</h2>
                    <p>8 (800) 890-46-56</p>
                </div>
                <button>Оставить заявку</button>
            </div>
         </div>
      </div>
 </>
  )
}

export default Contact