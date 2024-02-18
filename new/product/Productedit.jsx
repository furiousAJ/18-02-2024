import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import baseUrl from '../Api'
import Sidebar from '../../../Components/sidebar/Sidebar'
import Navbar from '../../../Components/navbar/Navbar'
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'

const Productedit = (props) => {
  var [inputs,setInputs]=useState(props.data)
    
  const inputHandler =(event)=> {
      const {name,value}=event.target
      setInputs((inputs)=>({...inputs,[name]:value}))
      console.log(inputs)
  }
  
  const savedata =()=>{
    
      if(props.method ==='put'){
        
          axios.put(baseUrl + "/product/editproduct/"+inputs._id,inputs)
          .then((response)=>{
              alert("Updated")
              window.location.reload(false)
            })
            .catch(err=>console.log(err))
      }
  }
  
 
  
  const [file, setFile] = useState(null);
  return (
    <div className='new'>
    {/* <Sidebar/> */}
    <div className="newContainer">
      {/* <Navbar/> */}
      <div className="top">
        <h1>Edit</h1>
      </div>
      <div className="bottom">
      <div className="left">
      <img
              src={file ? URL.createObjectURL(file) : 'https://i.ibb.co/KW8tBB8/img1.jpg'}
              alt='Not Found' className='imgupload'
            />
          </div>

          <div className="right"> 
          <div >
          <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            > 
        
             <br></br>
<br></br>  <br></br>               
    <TextField
      id='productname'
      label='Product Name'
      type='text'
      name='Productname'
      value={inputs.Productname}
      onChange={inputHandler}
    />
    <TextField
      id='Price'
      label='Price'
      type='text'
      name='Productprice'
      value={inputs.Productprice}
      onChange={inputHandler}
    /><br></br>  
    <TextField
      id='Quantity'
      label='Quantity'
      type='text'
      name='Quantity'
      value={inputs.Quantity}
      onChange={inputHandler}
    />
     <TextField
      id='expiredate'
      label='Expire Date'
      type='date'
      name='Expiredate'
      value={inputs.Expiredate}
      onChange={inputHandler}
      InputLabelProps={{ shrink: true }}
    /><br></br>  
    <FormControl sx={{ m: 1, width: '25ch' }}>
      <InputLabel>Category</InputLabel>
      <Select label='Category' name='Category' value={inputs.Category} onChange={inputHandler}>
        <MenuItem value='Dairy'>Dairy</MenuItem>
        <MenuItem value='Dry Fruits'>Dry Fruits</MenuItem>
        <MenuItem value="Fruits">Fruits</MenuItem>
                    <MenuItem value="Grains">Grains</MenuItem>
                    <MenuItem value="Honey">Honey</MenuItem>
                    <MenuItem value="Masala">Masala</MenuItem>
                    <MenuItem value="Vegitables">Vegitables</MenuItem>
        {/* Add other MenuItem options as needed */}
      </Select>
    </FormControl><br></br><div className="filephoto">              <label htmlFor='file'>
            Image: <DriveFolderUploadOutlined className='icon' name="Productname" value={inputs.Photo} onChange={inputHandler} />
          </label>
          <input
            type='file'
            id='file'
            onChange={(e) => setFile(e.target.files[0])}
            style={{ display: 'none' }}
          />&nbsp;&nbsp;&nbsp;&nbsp;
   
          Status:&nbsp;&nbsp;
          <select name="Status" value={inputs.Status}  onChange={inputHandler}>
         <option value="Active">Active</option>
         <option value="Inactive">Inactive</option>
        </select>
        <br/><br/>
    
    <div className='button'>
      <Button variant='contained' color='success' onClick={savedata}>
        Submit
      </Button>
      <Button type='button'>Reset</Button></div>
    </div></Box></div></div>
  </div></div></div>
  )
}

export default Productedit



