import React from 'react'
import './Modul.scss'
const Modul = ({children , close}) => {
  return (
    <>
      <div onClick={()=> close(false)} className="overlay"></div>
      <div className="modul">
         {children}
      </div>
    </>
  )
}

export default Modul