import React from 'react'
import empty from '../assets/icon/logo.svg'
import { Link } from 'react-router-dom'
import './Empty.scss'
function Empty({text}) {
  return (
    <div className="empty">
        <div style={{textAlign:"center"}}>
        <img  alt='empty' src={empty} />
        <h2 style={{margin:"20px 0" , fontFamily:"Manrope"}}>ваше {text} пусто </h2>
        <Link to={'/'}>
           <button>На главную</button> 
        </Link>
        </div>
    </div>
  )
}

export default Empty