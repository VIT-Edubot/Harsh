import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featureIds = [101, 202, 303];
  return (
    <div className='homeLi'>
      <h1>Home Page</h1>
      <p>Select a feature to view in the Dashboard:</p>
      <ul>
        {featureIds.map((id) => (
          <li key={id}>
            <Link to={`/dashboard/${id}`}>View Feature {id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;