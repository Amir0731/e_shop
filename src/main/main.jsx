import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../header/index'
// import Footer from '../footer/index.jsx'

export default function Main() {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}
