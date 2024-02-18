import React, { useEffect } from 'react'
import '../flexbox/style.css';
import logo from '../flexbox/logo.svg'
import ecog from '../flexbox/ecog.png'
const Slidebar = () => {

    
    useEffect(() => {
        const cardsContainer = document.querySelector('.container');
    
        const handleMouseOver = (e) => {
          const target = e.target.closest('.card');
    
          if (!target) return;
    
          cardsContainer.querySelectorAll('.card').forEach((card) => {
            card.classList.remove('active');
          });
    
          target.classList.add('active');
        };
    
        cardsContainer.addEventListener('mouseover', handleMouseOver);
    
        // Cleanup event listener when component unmounts
        return () => {
          cardsContainer.removeEventListener('mouseover', handleMouseOver);
        };
      }, []); // Empty dependency array means this effect runs once after the initial render
    
  
  return (
    <div className="container">
      <div className="card active">
        <img className="background" src="./assets/vegit.jpg" alt=""/>
     
        <div className="card-content">
          <div className="profile-image">
          <img src={ecog} className='pic' alt="Your SVG" />

          </div>

          <h3 className="title">Vegetables</h3>
        </div>
        <div className="backdrop"></div>
      </div>

      <div className="card">
        <img className="background" src="./assets/fruits.jpg" alt=""/>

        <div className="card-content">
          <div className="profile-image">
          <img src={ecog} className='pic' alt="Your SVG" />
          </div>

          <h3 className="title">Fruits</h3>
        </div>
        <div className="backdrop"></div>
      </div>

      <div className="card">
        <img className="background" src="./assets/freshdairy.jpg" alt=""/>

        <div className="card-content">
          <div className="profile-image">
          <img src={ecog} className='pic' alt="Your SVG" />
          </div>

          <h3 className="title">Freshdairy</h3>
        </div>
        <div className="backdrop"></div>
      </div>

      <div className="card">
        <img className="background" src="./assets/nuts.jpg" alt=""/>

        <div className="card-content">
          <div className="profile-image">
          <img src={ecog} className='pic' alt="Your SVG" />
          </div>

          <h3 className="title">Nuts</h3>
        </div>
        <div className="backdrop"></div>
      </div>

      <div className="card">
        <img className="background" src="./assets/grains.jpg" alt=""/>

        <div className="card-content">
          <div className="profile-image">
          <img src={ecog} className='pic' alt="Your SVG" />
          </div>

          <h3 className="title">Grains</h3>
        </div>
        <div className="backdrop"></div>

      </div>

      <div className="card">
        <img className="background" src="./assets/spicy.jpg" alt=""/>

        <div className="card-content">
          <div className="profile-image">
          <img src={ecog} className='pic' alt="Your SVG" />
          </div>

          <h3 className="title">Spicy</h3>
        </div>
        <div className="backdrop"></div>
      </div>

      
      


      
      <div className="card">
        <img className="background" src="./assets/beans.jpg" alt=""/>

        <div className="card-content">
          <div className="profile-image">
          <img src={ecog} className='pic' alt="Your SVG" />
          </div>

          <h3 className="title">Legumes</h3>
        </div>
        <div className="backdrop"></div>
      </div>



    </div>
  )
}

export default Slidebar