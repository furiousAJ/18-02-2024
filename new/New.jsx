import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import { DriveFolderUploadOutlined, Photo } from '@mui/icons-material';
import Sidebar from '../../Components/sidebar/Sidebar';
import Navbar from '../../Components/navbar/Navbar';
import '../new/new.scss';
import { useNavigate } from 'react-router-dom';
import baseUrl from './Api';

const New = (props) => {
  var [category, setCategory] = useState([]);
  var [selectedimage, setSelectedimage] = useState(null);

  const [inputs, setInputs] = useState({
    Productname: '',
    Productprice: '',
    Quantity: '',
    Expiredate: '',
    Cid: '',
    Status: 'Active',
    Photo: '',
    // ... other properties
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data or initialize state based on your needs
    if (props.method === 'put' && props.data) {
      setInputs(props.data);
    }
  }, [props.method, props.data]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
  
  // Other input handling logic...
  // For example, if you want to validate numeric input for "Productprice" and "Quantity":
  if ((name === 'Productprice' || name === 'Quantity') && !(/^\d+$/.test(value))) {
    return; // Do not update state if input is not a valid number
  }
  
  // If it's the Expiredate field, extract the date part only
  if (name === 'Expiredate') {
    const dateOnly = value.split('T')[0]; // Extract date part
    setInputs((prevInputs) => ({ ...prevInputs, [name]: dateOnly }));
  } else {
    // For other fields, update the state as usual
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  }
};

  const addHandler = () => {
    const formdata = new FormData();
    formdata.append('Productname', inputs.Productname);
    formdata.append('Productprice', inputs.Productprice);
    formdata.append('Quantity', inputs.Quantity);
    formdata.append('Expiredate', inputs.Expiredate);
    formdata.append('Cid', inputs.Cid);
    formdata.append('Status', inputs.Status);
    formdata.append('Photo', selectedimage);

    fetch(baseUrl + '/product/productnew', {
      method: 'post',
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => {
        alert('record saved');
      })
      .catch((err) => {
        console.log('error');
      });
    navigate('/productlist');
  };

  const [file, setFile] = useState(null);

  const handleimage = (event) => {
    const file = event.target.files[0];
    setSelectedimage(file);
    inputs.Photo = file;
  };
  const savedata = () => {
    const formdata = new FormData();
    formdata.append('Photo', selectedimage);
  };

  useEffect(() => {
    axios
      .get(baseUrl + '/category/categoryview')
      .then((response) => {
        console.log(response.data);
        setCategory(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className='top'>
          <h1>Add product</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img
              src={file ? URL.createObjectURL(file) : 'https://i.ibb.co/KW8tBB8/img1.jpg'}
              alt='Not Found'
              className='imgupload'
            />
          </div>

          <div className='right'>
            <div className='alignform'>
              <Box
                component='form'
                sx={{
                  '& .MuiTextField-root': { m: 1.6, width: '29ch' },
                }}
                noValidate
                autoComplete='off'
              >
                <div className='filephoto'>
                  <label htmlFor='file'>Image: </label>
                  <input type='file' className='icon' onChange={handleimage} />
                  <br />
                  <br />
                  Product Name:
                  <TextField
                    id='productname'
                    label='eg:Apple'
                    type='text'
                    name='Productname'
                    value={inputs.Productname}
                    onChange={inputHandler}
                  />
                  <br></br>
                  Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <TextField
                    id='Price'
                    label='eg:260'
                    type='text'
                    name='Productprice'
                    value={inputs.Productprice}
                    onChange={inputHandler}
                  />
                  <br></br>
                  Quantity:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <TextField
                    id='Quantity'
                    label='Quantity Kg / Lr'
                    type='text'
                    name='Quantity'
                    value={inputs.Quantity}
                    onChange={inputHandler}
                  />
                  <br></br>
                  Expire Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <TextField
                    id='expiredate'
                    label='Expire Date'
                    type='date' // Set type to 'date'
                    name='Expiredate'
                    value={inputs.Expiredate}
                    onChange={inputHandler}
                    InputLabelProps={{ shrink: true }} // Shrink the input label
                  />
                  <br></br>
                  Category:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <FormControl sx={{ m: 1, width: '25ch' }}>
                    <select
                      className='boxcategory'
                      name='Cid'
                      value={inputs.Cid}
                      onChange={inputHandler}
                    >
                      {category.map((value, index) => {
                        return (
                          <option key={index} value={value._id}>
                            {value.Categoryname}
                          </option>
                        );
                      })}
                    </select>
                    <br></br>
                  </FormControl>
                  <br></br>
                  Status:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <select className='boxact' name='Status' value={inputs.Status} onChange={inputHandler}>
                    <option value='Active'>Active</option>
                    <option value='InActive'>InActive</option>
                  </select>
                  <br />
                  <br />

                  <div className='button'>
                    <Button variant='contained' color='success' onClick={addHandler}>
                      Submit
                    </Button>
                    
                  </div>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;