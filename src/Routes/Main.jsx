import React from 'react'
import NaveBar from '../Shared/Navbar'
import { Outlet } from 'react-router-dom'
import FooterPage from '../Shared/Footer'

const Main = () => {
  return (
    <>
      <NaveBar></NaveBar> 
      <Outlet></Outlet>
      <FooterPage></FooterPage>
    </>
  )
}

export default Main