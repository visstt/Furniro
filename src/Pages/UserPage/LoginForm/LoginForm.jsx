import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: '',
    address: '',
    city: '',
    province: '',
    zipCode: '',
    phone: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/regUser', formData);
      console.log('User registered successfully:', response.data);
    } catch (error) {
      console.error('There was an error registering the user:', error);
    }
  };

  return (
    <div className='containerUser'>
      <div className="wrapperUser">
        <h1 className='textUser'>Billing details</h1>
        <form className="LoginForm" onSubmit={handleSubmit}>
          <div className="NamesUser">
            <div className="Firstname">
              <h2 className='h2'>First Name</h2>
              <input
                type="text"
                className='inputNames'
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="Lastname">
              <h2 className='h2'>Last Name</h2>
              <input
                type="text"
                className='inputNames'
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="inf">
            <div className="blockUser">
              <h2 className='h2'>Company Name (Optional)</h2>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
              />
            </div>
            <div className="blockUser">
              <h2 className='h2'>Country / Region</h2>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              />
            </div>
            <div className="blockUser">
              <h2 className='h2'>Street address</h2>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="blockUser">
              <h2 className='h2'>Town / City</h2>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="blockUser">
              <h2 className='h2'>Province</h2>
              <input
                type="text"
                name="province"
                value={formData.province}
                onChange={handleInputChange}
              />
            </div>
            <div className="blockUser">
              <h2 className='h2'>ZIP code</h2>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
              />
            </div>
            <div className="blockUser">
              <h2 className='h2'>Phone</h2>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="blockUser">
              <h2 className='h2'>Email address</h2>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
