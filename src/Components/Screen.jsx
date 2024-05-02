// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [sortedUsers, setSortedUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/users');
//       setUsers(response.data);
//       setSortedUsers(response.data);
//     } catch (error) {
//       console.log('Error fetching data:');
//     }
//   };

//   const handleSearch = () => {
//     const filteredUsers = users.filter(user =>
//       user.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setSortedUsers(filteredUsers);
//   };

//   const handleSortByName = () => {
//     const sorted = [...sortedUsers].sort((a, b) =>
//       a.name.localeCompare(b.name)
//     );
//     setSortedUsers(sorted);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search by name"
//         value={searchTerm}
//         onChange={e => setSearchTerm(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//       <button onClick={handleSortByName}>Sort by Name</button>
//       <ul>
//         {sortedUsers.map(user => (
//           <li key={user._id}>
//             {user.name} - {user.email} - {user.age}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Screen.css'; // Import the CSS file

const App = () => {
  const [users, setUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users');
      setUsers(response.data);
      setSortedUsers(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleSearch = () => {
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSortedUsers(filteredUsers);
  };

  const handleSortByName = () => {
    const sorted = [...sortedUsers].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setSortedUsers(sorted);
  };

  const handleSortByAge = () => {
    const sorted = [...sortedUsers].sort((a, b) => a.age - b.age);
    setSortedUsers(sorted);
};


  return (
    <>
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleSortByName}>Sort by Name</button>
        <button onClick={handleSortByAge}>Sort by Quantity</button>
      </div>
      <br/>
    </div>
    <div className='divclass'>
      <ul>
        {sortedUsers.map(user => (
          <li key={user._id}>
            {user.name} - {user.email} - {user.age}
          </li>
        ))}
      </ul>
      </div>
    </>
  );
};

export default App;
