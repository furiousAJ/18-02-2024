import React from 'react';
import "../product/list.scss"
import Sidebar from '../../../Components/sidebar/Sidebar';
import Navbar from '../../../Components/navbar/Navbar';

import Addproduct from '../Addproduct';
const List = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Addproduct/>
      </div>
    </div>
  )
}

export default List
