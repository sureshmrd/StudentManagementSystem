import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const StudentLogin = () => {
  const [regNo, setRegNo] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <Navigate to={`/student/${regNo}`} />;
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Enter Reg No</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input 
            type="text" 
            value={regNo} 
            onChange={(e) => setRegNo(e.target.value)} 
            className="form-control" 
            placeholder="Enter Reg No" 
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default StudentLogin;
