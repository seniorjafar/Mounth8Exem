import React from 'react'
import './Brends.scss'

import brend1 from '../../assets/image/brendLogo1.svg'
import brend2 from '../../assets/image/brendLogo2.svg'
import brend3 from '../../assets/image/brendLogo3.svg'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const Brends = () => {
  return (
    <>
      <div className="brends">
         <div className="container">
             <div className="brends__title">
                 <h2>Только проверенные бренды</h2>
             </div>
             <div className="brends__cards">
                <div className="brends__card">
                     <img src={brend1} alt="" />
                     <img src={brend2} alt="" />
                     <img src={brend3} alt="" />
                     <img src={brend1} alt="" />
                </div>
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    <SwiperSlide>
                     <img src={brend1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                     <img src={brend2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                     <img src={brend3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                     <img src={brend1} alt="" />
                    </SwiperSlide>
               </Swiper>
             </div>
         </div>
      </div>
    </>

  )
}

export default Brends