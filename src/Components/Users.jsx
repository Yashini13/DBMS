import React, { useEffect, useState } from 'react';
import Update from './Update';
import axios from 'axios'
import { NavLink } from 'react-router-dom';
const Table = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
  }, []);

  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/deleteUsers/'+id)
    .then(res => {console.log(res)
    window.location.reload()
    })
    .catch(err => console.log(err))
  };

  // const handleAddRow = () => {
  //   const newData = {
  //     id: data.length + 1,
  //     name: 'New User',
  //     email: 'newuser@example.com',
  //     age: 0,
  //   };
  //   setData([...data, newData]);
  // };

  // const handleEdit = (id) => {
  //   const newData = data.map((item) => {
  //     if (item.id === id) {
  //       return { ...item, name: 'Edited Name', email: 'edited@example.com', age: 50 }; // Modify these values as needed
  //     }
  //     return item;
  //   });
  //   setData(newData);
  // };

  return (
    <div className="container_us item-center">
      <h2 className='m-3'>Inventory Items Table</h2>
      <NavLink className=" w-10 btn btn-success m-3" to="/create" activeClassName="text-blue-600">
              Click to Add Product
      </NavLink>
      <table className=" m-3 table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Product Id</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>
                <button
                  className="btn btn-danger m-2"  onClick={(e) => handleDelete(user._id)}>
                  Delete Item
                </button>
                <NavLink className="m-2 w-10 btn btn-success" to={`/update/${user._id}`} activeClassName="text-blue-600">
                Update Item
               </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
