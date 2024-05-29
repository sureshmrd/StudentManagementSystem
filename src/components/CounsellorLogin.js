import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CounsellorLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send a POST request to the backend with the username and password
      const response = await axios.post('http://localhost:8000/myapi/login/', {
        username,
        password
      });
      console.log(response)
      // If login is successful, redirect the user to another page
      navigate('/counsellor/'+username); // Replace with your desired URL
    } catch (error) {
      // If login fails, display the error message
      alert('Invalid username or password');
    }
  };

  const handleForgotPassword = () => {
    // Add logic for forgot password functionality here
    navigate('/counsellor/forgotpassword')
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Counsellor Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username:</label>
                  <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <button type="button" className="btn btn-link" onClick={handleForgotPassword}>Forgot Password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounsellorLogin;
