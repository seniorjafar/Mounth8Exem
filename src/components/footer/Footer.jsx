import React from 'react'
import'./Footer.scss'


import logo from '../../assets/image/logo.png'
import footer from '../../assets/icon/carta.svg'

const Footer = () => {
  return (
    <>
      <footer>
         <div className="container">
             <div className="footer__content">
                <div className="footer__card">
                    <div className='logo'>
                        <img src={logo} alt="" />
                        <h2>NORNLIGHT</h2>
                    </div>
                    <p>8 (800) 890-46-56</p>
                    <img src={footer} alt="" />
                    <a href="">Политика конфидециальности</a>
                    <a href="">Пользовательское соглашение</a>
                    <span>
                        <h5>VK</h5>
                        <h5>VK</h5>
                        <h5>VK</h5>
                    </span>
                </div>
                <div className="footer__card">
                     <h2>Покупателям</h2>
                     <a href="">О компании</a>
                     <a href="">Доставка и оплата</a>
                     <a href="">Возврат</a>
                     <a href="">Гарантии</a>
                     <a href="">Контакты</a>
                     <a href="">Блог</a>
                </div>
                <div className="footer__card">
                     <h2>Товары</h2>
                     <a href="">Люстры</a>
                     <a href="">Светильники</a>
                     <a href="">Бра</a>
                     <a href="">Торшеры</a>
                     <a href="">Комплектуюшие</a>
                     <a href="">Настольные лампы</a>
                </div>
                <div className="footer__card">
                     <a href="">Споты</a>
                     <a href="">Трековые светильники</a>
                     <a href="">Уличные светильники</a>
                     <a href="">Технические светильники</a>
                     <a href="">Светодиодные ленты </a>
                </div>
             </div>
         </div>
      </footer>
    </>
  )
}

export default Footer