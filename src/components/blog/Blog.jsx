import React from 'react'
import './Blog.scss'
import { FaArrowRightLong } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

import home1 from '../../assets/image/home1.svg';
import home2 from '../../assets/image/home2.svg'
import home3 from '../../assets/image/home3.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';



import 'swiper/css';
import 'swiper/css/pagination';

const Blog = () => {
  return (
    <>
      <div className="blog">
         <div className="container">
             <div className="blog__title">
                 <h2>Блог</h2>
                 <button>Перейти в блог <FaArrowRightLong/></button>
             </div>
             <div className="blog__cards">
                 <div className="blog__card">
                    <img src={home1} alt="" /> 
                    <div className="card__parag">
                    <span>
                        <h3>Как правильно освещать дом снаружи?</h3>
                        <p>01.01.2024</p>
                    </span>
                       <MdArrowOutward />
                    </div>
                 </div>
                 <div className="blog__card">
                    <img src={home2} alt="" /> 
                    <div className="card__parag">
                    <span>
                        <h3>Как правильно освещать дом снаружи?</h3>
                        <p>01.01.2024</p>
                    </span>
                       <MdArrowOutward />
                    </div>
                 </div>
                 <div className="blog__card">
                    <img src={home3} alt="" /> 
                    <div className="card__parag">
                    <span>
                        <h3>Как правильно освещать дом снаружи?</h3>
                        <p>01.01.2024</p>
                    </span>
                       <MdArrowOutward />
                    </div>
                 </div>
             </div>
             <Swiper pagination={true} modules={[Pagination]} className="blog__cardss">
                    <SwiperSlide>
                     <div className="blog__card">
                        <img src={home1} alt="" /> 
                        <div className="card__parag">
                        <span>
                            <h3>Как правильно освещать дом снаружи?</h3>
                            <p>01.01.2024</p>
                        </span>
                        <MdArrowOutward />
                        </div>
                       </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="blog__card">
                    <img src={home2} alt="" /> 
                    <div className="card__parag">
                    <span>
                        <h3>Как правильно освещать дом снаружи?</h3>
                        <p>01.01.2024</p>
                    </span>
                       <MdArrowOutward />
                    </div>
                 </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="blog__card">
                            <img src={home3} alt="" /> 
                            <div className="card__parag">
                            <span>
                                <h3>Как правильно освещать дом снаружи?</h3>
                                <p>01.01.2024</p>
                            </span>
                            <MdArrowOutward />
                            </div>
                        </div>
                    </SwiperSlide>
               </Swiper>
         </div>
         <div className="btns"> 
             <button>Перейти в блог <FaArrowRightLong/></button>
         </div>
        </div>
    </>
  )
}

export default Blog