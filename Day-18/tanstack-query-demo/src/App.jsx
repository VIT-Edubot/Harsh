import React from 'react';
import { Link, Outlet } from '@tanstack/react-router';

const App = () => {
  return (
    <div>
      {/* Header and nav in one horizontal row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'black',
          color: 'white',
          padding: '1rem',
        }}
      >
        <h1 style={{ margin: 0 }}>TanStack Query + Router Demo</h1>
        <nav>
          <Link to="/" style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}>Home</Link>
          <Link to="/data" style={{ color: 'white', textDecoration: 'none' }}>Data Page</Link>
        </nav>
      </div>

      <hr />
      <Outlet />
    </div>
  );
};

export default App;
