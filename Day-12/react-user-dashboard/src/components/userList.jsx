import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch data on mount
  useEffect(() => {
    fetch('http://localhost:3001/employee') // change to your API
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, []);

  // Timer effect: update document title
  useEffect(() => {
    const interval = setInterval(() => {
      document.title = `Users Loaded: ${users.length}`;
    }, 5000);

    return () => clearInterval(interval); // cleanup
  }, [users]);

  // Search filter
  useEffect(() => {
    const result = users.filter(user =>
      user.Name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  }, [search, users]);

  return (
    <div className="user-list">
      {loading ? (
        <p className="loading">Loading users...</p>
      ) : (
        <>
          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search"
          />
          <ul>
            {filtered.map(user => (
              <li key={user.Id} className="user-card">
                <strong> ID : </strong>{user.Id}<br />
                <strong> Name : </strong><strong>{user.Name}</strong><br />
                <strong> Department : </strong>Department: {user.Department}<br />
                <strong> Position : </strong>Position: {user.Position}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default UserList;
