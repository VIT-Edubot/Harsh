import React from "react";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Feature data for ID: {id}</p>
    </div>
  );
};

export default Dashboard;
