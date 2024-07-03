import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './Contact.scss'
const Contact = () => {
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
                    <p>Пн-Пт: 10:00 до 19:00 Сб-Вс: заказ через корзину <br />Телефоны:  </p>
                </div>
             </div>
         </div>
         <div className="iframe">
            <iframe
                allowFullScreen=""
                frameBorder={0}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.0730692531147!2d69.2012376766596!3d41.28551417131297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1719839644954!5m2!1sru!2s"
                style={{ border: '0' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
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