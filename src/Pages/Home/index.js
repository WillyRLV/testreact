import React from 'react'
import { Outlet } from 'react-router-dom'
import '../Home/style.scss'

const Home = () => {
  return (
    <div className='Home-style container'>
      Hola mundo Home
      <button className='btn btn-warning'>Ingresara</button>
      <Outlet/>
    
    </div>
  )
}

export default Home
