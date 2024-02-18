import React from 'react'
import Productview from './Productview'
import Sidebar from '../../../Components/sidebar/Sidebar'
import Navbar from '../../../Components/navbar/Navbar'
import '../product/allproduct.scss'
const Allproduct = () => {
  return (
    <div className='addprodnew'>
     
     <div className="addprodnewContainer">
       
       
       <div className="addprodbottom"><h2 className='rece'>Product view</h2><br></br>
         <Productview/>
         
     </div>
   </div></div>
   
  )
}

export default Allproduct







{/* <div className='allprolist'>
<Sidebar/>
<div className="allprolistContainer">
  <Navbar/>
  <div className='allprotop'><h2 className='fullwidth'>Product View</h2><br></br><br></br><br></br>
  <Productview/>
  </div>
</div>
</div> */}



