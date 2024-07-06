import React from 'react'
import './Catalog.scss'
import { FaArrowRight } from "react-icons/fa6";
import ka1 from '../../assets/image/katalog1.png'
import ka2 from '../../assets/image/katalog2.png'
import ka from '../../assets/image/katalog.png'
import ka4 from '../../assets/image/katalog4.png'
import ka5 from '../../assets/image/katalog5.png'
import ka6 from '../../assets/image/katalog6.png'

const Katalog = () => {
  return (
    <>
      <div className="katalog">
          <div className="container">
             <div className="katalog__title">
                 <h2>Каталог</h2>
                 
                 <button>Весь каталог <FaArrowRight />
                 </button>
             </div>
                 <div className="katalog__cards">
                     <div className="katalog__card">
                           <div className="card__left">
                                <h3>Люстры</h3>
                                <p>От 540₽ <FaArrowRight /></p>
                           </div>
                           <div className="card__right">
                                <h3>Люстры</h3>
                               <img src={ka1} alt="" />
                               <p>От 540₽ <FaArrowRight /></p>
                           </div>
                     </div>
                     <div className="katalog__card">
                           <div className="card__left">
                                <h3>Светильники</h3>
                                <p>От 540₽ <FaArrowRight /></p>
                           </div>
                           <div className="card__right">
                                <h3>Светильники</h3>
                               <img src={ka2} alt="" />
                               <p>От 540₽ <FaArrowRight /></p>
                           </div>
                     </div>
                     <div className="katalog__card">
                           <div className="card__left">
                                <h3>Бра</h3>
                                <p>От 540₽ <FaArrowRight /></p>
                           </div>
                           <div className="card__right">
                                <h3>Бра</h3>
                               <img src={ka} alt="" />
                               <p>От 540₽ <FaArrowRight /></p>
                           </div>
                     </div>
                     <div className="katalog__card">
                           <div className="card__left">
                                <h3>Торшеры</h3>
                                <p>От 540₽ <FaArrowRight /></p>
                           </div>
                           <div className="card__right">
                                 <h3>Торшеры</h3>
                               <img src={ka4} alt="" />
                               <p>От 540₽ <FaArrowRight /></p>
                           </div>
                     </div>
                     <div className="katalog__card">
                           <div className="card__left">
                                <h3>Настольные лампы</h3>
                                <p>От 540₽ <FaArrowRight /></p>
                           </div>
                           <div className="card__right">
                                <h3>Настольные лампы</h3>
                               <img src={ka5} alt="" />
                               <p>От 540₽ <FaArrowRight /></p>
                           </div>
                     </div>
                     <div className="katalog__card">
                           <div className="card__left">
                                <h3>Споты</h3>
                                <p>От 540₽ <FaArrowRight /></p>
                           </div>
                          <div className="card__right">
                              <h3>Споты</h3>
                               <img src={ka6} alt="" />
                               <p>От 540₽ <FaArrowRight /></p>
                           </div>
                     </div>
                 </div>
                 <div className="katalog__title__bottom">
                    <button>Весь каталог <FaArrowRight />
                    </button>
                 </div>
          </div>
      </div>
    </>
  )
}

export default Katalog