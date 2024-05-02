import { useNavigate , NavLink} from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
const Table = () => {

  const [name, setName]= useState();
  const [email, setEmail]= useState();
  const [age, setAge]= useState();
  const navigate =  useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/createUser" , {name , email, age})
    .then(result => { console.log(result)
    navigate('/users')
    })
    .catch(err => console.log(err));
  };

  return (
    <>
     <h2 className='m-3 text-center' >Add the following details to system</h2>
    <div className="container">
     
      <form onSubmit={handleSubmit} className="mb-3 m-3">
        <div className="form-group m-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group m-3">
          <input
            type="text"
            className="form-control"
            placeholder="Product Id"
            name="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group m-3">
          <input
            type="number"
            className="form-control"
            placeholder="Quantity"
            name="age"
            value={age}
            onChange={(e)=> setAge(e.target.value)}
            required
          />
        </div>
        <NavLink to='/' type="submit" className="btn btn-primary m-3 text-center">
          Add
        </NavLink>
      </form>
    </div>
    </>
  );
};

export default Table;
