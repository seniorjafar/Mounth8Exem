import React from 'react'
import './NornLight.scss'


import nor1 from '../../assets/image/norn1.png'
import nor2 from '../../assets/image/norn2.png'
import nor3 from '../../assets/image/norn3.png'
import nor4 from '../../assets/image/norn4.png'


const NORNLIGHT = () => {
  return (
    <>
      <div className="nornlight">
          <div className="container">
              <div className="nornlight__title">
                  <h2>Почему NORNLIGHT?</h2>
              </div>
              <div className="nornlight__cards">
                  <div className="nornlight__card">
                      <img src={nor1} alt="" />
                      <h3>Только проверенные бренды</h3>
                      <p>Бренды, проверенные временем и качеством</p>
                  </div>
                  <div className="nornlight__card">
                      <img className='xz2' src={nor2} alt="" />
                      <p> </p>
                      <h3>Самые низкие цены</h3>
                      <p>Ниже не будет нигде</p>
                  </div>
                  <div className="nornlight__card">
                      <img  className='xz2' src={nor3} alt="" />
                      <p> </p>
                      <h3>Быстрая доствка</h3>
                      <p>Доставляем по всей РФ за 1-10 дней</p>
                  </div>
                  <div className="nornlight__card">
                      <img  className='xz2' src={nor4} alt="" />
                      <h3>Большой ассортимент</h3>
                      <p>Более 1000 товаров</p>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default NORNLIGHT