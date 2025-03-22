import React, { useState } from 'react';
import './CollegeForm.css';

const CollegeForm = ({ addCollege }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && address && city && state) {
      const newCollege = { name, address, city, state };

      try {
        const response = await fetch('http://localhost:8080/college', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newCollege),
        });

        const data = await response.json();
        addCollege(data); // Update state in parent component
        setName('');
        setAddress('');
        setCity('');
        setState('');
      } catch (error) {
        console.error('Error adding college:', error);
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Add New College</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>State:</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Add College</button>
      </form>
    </div>
  );
};

export default CollegeForm;
