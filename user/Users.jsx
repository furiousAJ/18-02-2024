import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Usertab from './Usertab'
import '../user/users.scss'
const Users = () => {
  return (
    <div className='ord'>
    <Sidebar/>
  
  <div className='ordcon'>
  <Usertab/>
  </div>

  
</div>
  )
}

export default Users
