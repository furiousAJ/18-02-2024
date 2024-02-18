import React from 'react'
import Allproduct from './Allproduct'
import Navbar from '../../../Components/navbar/Navbar'
import Sidebar from '../../../Components/sidebar/Sidebar'

const Productlist = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Allproduct/>
      </div>
    </div>
  )
}

export default Productlist
