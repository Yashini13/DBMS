import { useNavigate, useParams } from 'react-router-dom';
import React, { useState , useEffect} from 'react';
import axios from 'axios';
const Table = () => {
  
  const {id} = useParams();
  const [name, setName]= useState();
  const [email, setEmail]= useState();
  const [age, setAge]= useState();
  const navigate =  useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/getUser/'+id)
    .then(result => {console.log(result)
     setName(result.data.name);
     setEmail(result.data.email);
     setAge(result.data.age);
    })
    .catch(err => console.log(err))
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3000/updateUser/"+id , {name , email, age})
    .then(result => { console.log(result)
    navigate('/users')
    })
    .catch(err => console.log(err));
  };

  return (
    <>
    <h2 className='text-center'> Update Table</h2>
    <div className="container"> 
     <form onSubmit={handleSubmit} className="mb-3 m-3">
       <div className="form-group  m-3">
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
       <div className="form-group  m-3">
         <input
           type="text"
           className="form-control"
           placeholder="Email"
           name="email"
           value={email}
           onChange={(e)=> setEmail(e.target.value)}
           required
         />
       </div>
       <div className="form-group  m-3">
         <input
           type="number"
           className="form-control"
           placeholder="Age"
           name="age"
           value={age}
           onChange={(e)=> setAge(e.target.value)}
           required
         />
       </div>
       <button type="submit" className="btn btn-primary  m-3">
         Add
       </button>
     </form>
   </div>
    </>
    
  );
};

export default Table;
