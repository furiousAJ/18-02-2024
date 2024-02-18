import React from 'react'
import Flexdraw from './Flexdraw'
import Slidebar from './Slidebar'
import '../flexbox/flexslide.scss'
import Footer from '../footer/Footer'

const Flexslide = () => {
  return (
    <div>
      
      <Flexdraw/><br></br>
      
      <div className='alignflexbox'>
      <Slidebar/></div>
      <div className='homefooterbottom'>
        <Footer/>
      </div>
     
    </div>
  )
}

export default Flexslide
