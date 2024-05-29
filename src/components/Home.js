import React from 'react';
import LoginDropdown from './LoginDropdown';

// Home component for the home page route
const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="mb-3"> {/* Add margin bottom to create space */}
            <LoginDropdown />
          </div>
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">Welcome to the Home Page</h1>
              <p className="card-text">This is the home page content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
