import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useTheme } from './ThemeContext.jsx';

const mockUsers = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'Diana' },
];

const UserList = () => {
  const { theme, toggleTheme } = useTheme();
  const [search, setSearch] = useState('');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const filteredUsers = useMemo(() => {
    return mockUsers.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleClick = useCallback((user) => {
    alert(`Hello ${user.name}`);
  }, []);

  return (
    <div className='Container'>
      <h2>User Dashboard</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <input
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <UserItem key={user.id} user={user} onClick={handleClick} />
        ))}
      </ul>
    </div>
  );
};

const UserItem = React.memo(({ user, onClick }) => {
  console.log('Rendering:', user.name);
  return <li onClick={() => onClick(user)}>{user.name}</li>;
});

export default UserList;
