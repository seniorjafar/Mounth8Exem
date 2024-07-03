import React from 'react'
import './Banner.scss'
import banner from '../../assets/image/banner.png'
const Banner = () => {
  return (
    <>
      <div className="banner">
          <div className="container">
             <div className="banner__content">
                 <div className="banner__left">
                     <h1>Скидка 15% <br />  на все подвесные <br /> светильники <br /> <b> до 5 февраля</b></h1>
                 </div>
                 <div className="banner__right">
                     <img src={banner} alt="" />
                 </div>
             </div>
          </div>
      </div>
     </>
  )
}

export default Banner