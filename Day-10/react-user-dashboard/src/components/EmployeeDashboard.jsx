import React from "react";
import EmployeCard from "./EmployeCard";
import Header from "./Header";

const employee = [{id : 10,Name: "Ramish kumar",Position: "Software Developer",Department: "Technical"},
    {id:12,Name: "Jonnethan roy",Position: "Software Developer",Department: "Technical"},
    {id: 109,Name: "Ramish Patel",Position: "Software Developer",Department: "Technical"},
    
];
const EmployeeDashboard =() =>{
    return (
        <div className="dashboard-container">
            <Header />
            <div>
                {employee.map((emp) =>(
                    <EmployeCard key ={emp.id} {...emp} />
                )
                )}
            </div>
        </div>
    )
};
export default EmployeeDashboard ;