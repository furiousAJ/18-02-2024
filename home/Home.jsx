import React from 'react'
import "../home/home.scss"
import Sidebar from '../../Components/sidebar/Sidebar'
import Navbar from '../../Components/navbar/Navbar'
import Widget from '../../Components/widget/Widget'
import Featured from '../../Components/featurechart/Featured'
import Chart from '../../Components/chart/Chart'



const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/> 
        <div className="widgets">
        <Widget type="user"/>
        <Widget type="order"/>
        <Widget type="earning"/>
        <Widget type="balance"/>
        </div>
        <div className="charts">
        <Featured/>
        <Chart title="Last Transactions" aspect={2/1}/>
        </div>
        
      </div>
    </div>
  )
}

export default Home
