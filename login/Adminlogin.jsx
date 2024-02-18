import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../login/login.scss';

const Adminlogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/adminAuth/admin', {
        username,
        password,
      });

      console.log('Login successful', response.data);
      // Handle successful login (e.g., store token in state or localStorage)
      navigate('/admin');
    } catch (error) {
      console.error('Login failed', error.response.data);
      // Set the error message based on the error status
      if (error.response.status === 401) {
        setErrorMessage('Didnt recognize you.');
      } else {
        setErrorMessage(error.response.data.message);
      }
    }
  };


  return (
    <div className='userpostion'>
      
    <div className="usercontainer">
      <div className="userimage-section">
        <div className="userimage-wrapper">
          <img src={require('../login/ve.jpg')} alt="" />
        </div>
        <div className="usercontent-container">
          <h1 className="usersection-heading">IT'S ALWAYS BETTER WHEN IT'S <span>Natural..</span></h1>
          <p className="usersection-paragraph">Eat well Feel goog.</p>
        </div>
      </div>
      <div className="userform-section">
        <div className="userform-wrapper">
          <div className="userlogo-container">
            <a href="#" className="userlogo-container">
              <img src={require('../image/ecog.png')} alt="Logo" />
            </a>
          </div>
          <h2>who are you? Reveal yourself!</h2>
          <p>Enter your credentials to access your account.</p>
          <div className="userinput-container">
            <div className="userform-group">
              <label htmlFor="email">Username</label>
              <input type="username" id="username" autoComplete="off"  
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} />

            </div>
            <div className="userform-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password"   
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="userremember-forgot">
            <div className="userremember-me">
             
              
            </div>
           
          </div>
          
          <button className="userlogin-btn" onClick={handleLogin}>
              Log In 
            </button>
          
          </div>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
    
  );
};


export default Adminlogin;