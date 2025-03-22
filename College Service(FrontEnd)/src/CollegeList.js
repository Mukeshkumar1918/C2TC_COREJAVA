import React, { useEffect, useState } from 'react';
import './CollegeList.css';

const CollegeList = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingCollege, setEditingCollege] = useState(null);
  const [updatedCollegeData, setUpdatedCollegeData] = useState({
    name: '',
    address: '',
    city: '',
    state: ''
  });

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await fetch('http://localhost:8080/college');
        const data = await response.json();
        setColleges(data);
      } catch (error) {
        setError('Error fetching colleges');
      } finally {
        setLoading(false);
      }
    };

    fetchColleges();
  }, []);

  const handleDelete = async (collegeId) => {
    try {
      const response = await fetch(`http://localhost:8080/college/${collegeId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setColleges(colleges.filter(college => college.id !== collegeId));
      } else {
        setError('Error deleting college');
      }
    } catch (error) {
      setError('Error deleting college');
    }
  };

  const handleEdit = (college) => {
    setEditingCollege(college);
    setUpdatedCollegeData(college);
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:8080/college/${editingCollege.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCollegeData),
      });
      if (response.ok) {
        const updatedCollege = await response.json();
        setColleges(
          colleges.map(college => 
            college.id === updatedCollege.id ? updatedCollege : college
          )
        );
        setEditingCollege(null); // Exit editing mode
      } else {
        setError('Error updating college');
      }
    } catch (error) {
      setError('Error updating college');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCollegeData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="college-list-container">
      <h2>College List</h2>
      {colleges.length === 0 ? (
        <p>No colleges available</p>
      ) : (
        <ul className="college-list">
          {colleges.map((college, index) => (
            <li key={index} className="college-item">
              {editingCollege && editingCollege.id === college.id ? (
                <div>
                  <input
                    type="text"
                    name="name"
                    value={updatedCollegeData.name}
                    onChange={handleInputChange}
                    placeholder="College Name"
                  />
                  <input
                    type="text"
                    name="address"
                    value={updatedCollegeData.address}
                    onChange={handleInputChange}
                    placeholder="College Address"
                  />
                  <input
                    type="text"
                    name="city"
                    value={updatedCollegeData.city}
                    onChange={handleInputChange}
                    placeholder="City"
                  />
                  <input
                    type="text"
                    name="state"
                    value={updatedCollegeData.state}
                    onChange={handleInputChange}
                    placeholder="State"
                  />
                  <button onClick={handleUpdate} className="save-button">Save</button>
                  <button onClick={() => setEditingCollege(null)} className="cancel-button">Cancel</button>
                </div>
              ) : (
                <div>
                  <strong>{college.name}</strong>
                  <p>{college.address}, {college.city}, {college.state}</p>
                  <button onClick={() => handleEdit(college)} className="edit-button">Update</button>
                  <button onClick={() => handleDelete(college.id)} className="delete-button">Delete</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CollegeList;
