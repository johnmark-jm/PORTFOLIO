import React, { ReactNode } from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'

const layout = ({children}:{children: ReactNode}) => {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  )
}

export default layout