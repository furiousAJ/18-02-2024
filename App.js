import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './Pages/home/Home';
import List from './Pages/new/product/List';
import New from './Pages/new/New';
import Single from './Pages/single/Single';
import Login from './Pages/login/Login';
import Users from './Components/user/Users';
import Usersignup from './Pages/login/Usersignup';
import { DarkModeContext } from './context/darkModeContext';
import Productview from './Pages/new/product/Productview';
import Admin from './Components/Adminside/Admin';
import Addcategory from './Components/Adminside/Addcategory';
import Categoryview from './Components/Adminside/Categoryview';
import Datas from './Components/Adminside/Datas';
import Allproduct from './Pages/new/product/Allproduct';
import Adminviewproduct from './Components/Adminside/Adminviewproduct';
import Admincategoryview from './Components/Adminside/Admincategoryview';
import Flexslide from './Pages/home/flexbox/Flexslide';
import Sellersignup from './Pages/login/Sellersignup';
import Sellerlogin from './Pages/login/Sellerlogin';
import Productlist from './Pages/new/product/Productlist';
import Productpage from './Components/products/Productpage';
import Fruits from './Components/products/items/Fruits';
import Dairy from './Components/products/items/Dairy';
import Adminlogin from './Pages/login/Adminlogin';

function App() {
  const [auth, setAuth] = useState(false);
  const [sellerAuth, setSellerAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.post(
            "http://localhost:5000/api/verifyToken",
            { token }
          );
          if (response.data.success) {
            const userType = localStorage.getItem("userType");
            if (userType === "user") {
              setAuth(true);
            } else if (userType === "seller") {
              setSellerAuth(true);
            }
          } else {
            setAuth(false);
            setSellerAuth(false);
          }
        } catch (error) {
          console.error("Token verification failed:", error);
          setAuth(false);
          setSellerAuth(false);
        }
      } else {
        setAuth(false);
        setSellerAuth(false);
      }
      setLoading(false);
    };

    checkToken();
  }, []);

  const handleLogout = () => {
    // Clear authentication state and token from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    setAuth(false);
    setSellerAuth(false);
  };

  if (loading) {
    return <div>Loading...</div>; // Render a loading indicator while checking the token
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

    {/* customer routes */}
    <Route path='/signup' element={<Usersignup />} />
    <Route path='/' element={<Login setAuth={setAuth}  />} />
    <Route path='/userside' element={<Flexslide />} />
    <Route path='/vegetables' element={<Productpage />} />
         
         <Route path='/fruits' element={<Fruits />} />
         <Route path='/dairy' element={<Dairy />} />
          
         
         {/* seller routes */}
         <Route path='/sellerlogin' element={<Sellerlogin setSellerAuth={setSellerAuth} />} />
          <Route path='/sellersignup' element={<Sellersignup />} />


           <Route
              path="/seller"
              element={sellerAuth ? <Home /> : <Navigate to="/sellerlogin" />}
            />
         

          
          <Route path='/products' element={<List />} />
          <Route path='/productlist' element={<Productlist />} />
          <Route path='/products/new' element={<New method='post' />} />
          <Route path='/orders' element={<Users />} />
          <Route path='/profile' element={<Single />} />
          <Route path='/category' element={<Addcategory method='post' />} />
          <Route path="/cview" element={<Categoryview method='get' />} />
          <Route path='/pview' element={<Productview method='get' />} />
          <Route path='/allproduct' element={<Allproduct />} />
          
          <Route path='/alogin' element={<Adminlogin />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/table' element={<Datas />} />
          <Route path='/adminallproduct' element={<Adminviewproduct />} />
          <Route path='/admincategoryall' element={<Admincategoryview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
