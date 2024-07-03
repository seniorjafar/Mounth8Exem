import React from 'react'
import './Catalog.scss'
import { FaArrowRight } from "react-icons/fa6";
import kat1 from '../../assets/image/kat1.png'
import kat2 from '../../assets/image/kat2.png'
import kat from '../../assets/image/kat.png'
import kat4 from '../../assets/image/kat4.png'
import kat5 from '../../assets/image/kat5.png'
import kat6 from '../../assets/image/kat6.png'

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
                               <img src={kat1} alt="" />
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
                               <img src={kat2} alt="" />
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
                               <img src={kat} alt="" />
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
                               <img src={kat4} alt="" />
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
                               <img src={kat5} alt="" />
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
                               <img src={kat6} alt="" />
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