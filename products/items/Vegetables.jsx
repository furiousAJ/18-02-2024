import React, { useEffect, useState } from 'react';
import '../products.scss';
import { FaCartPlus } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import axios from 'axios';
import baseUrl from '../../../Pages/new/Api';
import { Buffer } from 'buffer';
import LoadingIcons from 'react-loading-icons';

const Vegetables = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading status
  const [confirmationMessage, setConfirmationMessage] = useState('');

  useEffect(() => {
    axios.get(baseUrl + "/product/productview")
      .then(response => {
        console.log(response.data);
        setProduct(response.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(err => {
        console.log(err);
        setLoading(false); // Set loading to false on error as well
      });
  }, []);

  const handleBuyNow = async (productId) => {
    try {
      // Make a request to your backend API to place the order
      const response = await axios.post(baseUrl + "/orders/placeOrder", { productId });
      console.log(response.data); // Log the response from the backend
      setConfirmationMessage('Order placed successfully'); // Set the confirmation message
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <div className='bodyproduct'>
      {loading ? ( // Display loading animation if loading is true
        <div className="loading-animation"><LoadingIcons.BallTriangle stroke='green' /></div>
      ) : (
        <div className='grid'>
          {product.map((value, index) => (
            <div className="cardproduct" key={index}>
              <div className="image-container">
                <img src={`data:image/jpeg;base64,${Buffer.from(value.Photo.data)}`} alt='Error' />
              </div>
              <div className="content">
                <h2 className="profile-name">{value.Productname}</h2>
                <p className="price">Price:&nbsp;&nbsp;{value.Productprice}</p>
                <p className="description">Quantity:&nbsp;&nbsp;{value.Quantity}&nbsp;&nbsp;&nbsp;&nbsp;Expiredate {value.Expiredate}</p>
              </div>
              <div className="cart">
                <a className="favour">
                  <MdOutlineFavorite /><br />
                  Super
                </a>
                <a className="tocart">
                  <FaCartPlus  /><br />
                  Add to cart
                </a>
                <a className="buynow">
                  <LuShoppingBag onClick={() => handleBuyNow(value._id)} /><br />
                  Buy now
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
      {confirmationMessage && (
        <div className="confirmation-message">
          {confirmationMessage}
        </div>
      )}
    </div>
  );
};

export default Vegetables;
