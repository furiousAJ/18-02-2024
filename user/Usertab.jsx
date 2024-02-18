import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Usertab = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  return (
    <div>
      <h2>Ordered Products</h2>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            <h3>Product: {order.name}</h3>
            <p>Quantity: {order.orders.quantity}</p>
            {/* Add more fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Usertab;
