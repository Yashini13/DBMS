import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const AboutPage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2 className="mb-4">About Our Inventory Management System</h2>
          <p>Welcome to our inventory management system! Our system is designed to streamline the process of tracking and managing inventory for businesses of all sizes.</p>
          
          <h3 className="mt-5 mb-3">Key Features:</h3>
          <ul className="list-group mb-4">
            <li className="list-group-item">Real-Time Inventory Tracking</li>
            <li className="list-group-item">Customizable Categories</li>
            <li className="list-group-item">User-Friendly Interface</li>
            <li className="list-group-item">Reporting and Analytics</li>
          </ul>
          
          <h3 className="mb-3">Technology Stack:</h3>
          <ul className="list-group mb-4">
            <li className="list-group-item">React: Front-end library for building user interfaces.</li>
            <li className="list-group-item">Redux: State management library for managing application state.</li>
            <li className="list-group-item">React Router: Library for handling routing in React applications.</li>
            <li className="list-group-item">MongoDB: Backend-as-a-Service platform for rendering data.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
