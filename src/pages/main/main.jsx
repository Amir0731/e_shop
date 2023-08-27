import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Main() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
