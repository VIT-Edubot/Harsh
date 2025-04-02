import React from "react";
import Header from "./Header";

const employee = [{Name: "Ramish kumar",Position: "Software Developer",Department: "Technical"},
    {Name: "Jonnethan roy",Position: "Software Developer",Department: "Technical"},
    {Name: "Ramish Patel",Position: "Software Developer",Department: "Technical"},
    
];
const EmployeeDashboard =() =>{
    return (
        <div className="dashboard-container">
            <Header />
            <h2> Employee List</h2>
            <ul>
                {employee.map((employe,index)=>(
                    <li key ={index} className="employee-card">
                        <h3><strong>Name:</strong>{employe.Name}</h3>
                        <p><strong>Position:</strong>{employe.Position}</p>
                        <p><strong>Department:</strong> {employe.Department}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
};
export default EmployeeDashboard ;