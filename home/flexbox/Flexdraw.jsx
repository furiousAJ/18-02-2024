import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import '../flexbox/flexdraw.scss';
import ecog from '../flexbox/ecog.png';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SearchIcon from '@mui/icons-material/Search';

const Flexdraw = ({ handleLogout }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = () => {
    console.log("Search query: ", searchQuery);
    // Implement your search functionality here
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
    // Perform any action when a category is selected
  };

  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.querySelector(".navbar");
      const prevScrollPos = window.scrollY;

      if (prevScrollPos > 0) {
        navBar.style.transform = `translateY(-105%)`;
      } else {
        navBar.style.transform = `translateY(0%)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <a href="#"><img src={ecog} className='pi' alt="Your SVG" /></a>
        </div>
        <div className="menu">
          <div className="menu-links">
            <div className="usernavContainer">
              <div className="usersearchContainer">
                <input 
                  type="text" 
                  value={searchQuery} 
                  onChange={(e) => setSearchQuery(e.target.value)} 
                  placeholder="Search..." 
                  className="usersearchInput" />
                <button 
                  onClick={handleSearch} 
                  className="usersearchButton" >
                  <SearchIcon/>
                </button>
              </div>
            </div>
            <Link to="/userside" style={{ textDecoration: "none" }}><HomeIcon />Home</Link>
            <div className="dropdowns">
              <div className="dropdown">
                <button className="dropdown-button" onClick={toggleDropdown}>
                  <span style={{fontSize:'17px'}}>  <CategoryIcon /> Categories</span>
                </button>
                {isOpen && (
                  <div className="dropdown-menu">
                    <Link to="/dairy" style={{ textDecoration: "none" }}>
                    <button onClick={() => handleCategoryClick('Dairy')}>Dairy</button></Link>
                    <Link to="/fruits" style={{ textDecoration: "none" }}>
                    <button onClick={() => handleCategoryClick('Fruits')}>Fruits</button></Link>
                    <Link to="/vegetables" style={{ textDecoration: "none" }}>
                      <button onClick={() => handleCategoryClick('Vegetables')}>Vegetables</button>
                    </Link>
                  </div>
                )}
              </div>
              {selectedCategory && (
                <p>: {selectedCategory}</p>
              )}
            </div>
            <a href="#"><ShoppingCartOutlinedIcon /> Cart</a>
            <Link to="/sellerlogin"><StorefrontIcon />Become a Seller</Link>
            <a href="#"><ContactSupportIcon />Contact</a>
          </div>
          <button className="reg-in" onClick={handleLogout}>Log out</button>
        </div>
        <div className="menu-btn">
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </div>
  );
}

export default Flexdraw;
