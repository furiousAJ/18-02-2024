// Footer.jsx

import React from 'react';
import '../footer/footer.scss'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: ecogindiaprivate@gmail.com</p>
          <p>Phone: +91 9845289464</p>
        </div>

        <div className="footer-section">
          <h2>Follow Us</h2>
          <p>Connect with us on social media:</p>
          <div className="social-icons">
            <br></br>

            <ul className='ul'>
      <li className="item">
        <a href="#">
        < img src="https://i.ibb.co/kM23JqZ/insta.jpg" className='iconfooter' alt="insta" border="0"/>
        
        </a>
      </li>
      <li className="item">
        <a href="#">
      <img src="https://i.ibb.co/d5K6Jwz/face.png" className='iconfooter' alt="face" border="0"/>
        </a>
      </li>
      <li className="item">
        <a href="#">
        <img src="https://i.ibb.co/7RwF90F/you.png" className='iconfooter' alt="you" border="0"/>
        </a>
      </li>
      <li className="item">
        <a href="#">
        <img src="https://i.ibb.co/0nmqSGD/fhfd.jpg" className='iconfooter' alt="fhfd" border="0"/>
        </a>
      </li>
    </ul>
            {/* <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a> */}
          </div>
        </div>

        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Organic Products. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
