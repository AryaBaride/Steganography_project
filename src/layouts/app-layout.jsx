import React from 'react'
import {Outlet} from "react-router-dom"
import Header from "@/components/header3"
import Footer from "@/components/footer"
import AboutUs from '@/pages/about'

const AppLayout= () => {
  return (
    <div>
      <div className='grid-background'></div>
      <main className = "min-h-screen container">
        <Header/>
        <Outlet/>
      </main>
      <Footer/>
      
    </div>
   
  )
}

export default AppLayout;