import React from 'react'
import '../new/addproduct.scss'

import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Productview from './product/Productview'
const Addproduct = () => {
  return (
   <div className='addprodnew'>
     
      <div className="addprodnewContainer">
        
        <div className="addprodtop"> <Link to="/products/new" style={{textDecoration:"none"}} className='addprodlink'>
           <Button className='buttadd'>Add products</Button></Link>
        </div>
        <div className="addprodbottom"><h2 className='rece'>Recently Added</h2><br></br>
          <Productview/>
          
      </div>
    </div></div>
  )
}

export default Addproduct

