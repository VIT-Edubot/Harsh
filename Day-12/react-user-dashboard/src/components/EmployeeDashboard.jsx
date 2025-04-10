
import React from "react";
import EmployeCard from "./EmployeCard";
import UserList from "./userList";
import Header from "./Header";





const EmployeeDashboard =() =>{
    return (
        <div className="dashboard-container">
            <Header />
            <div>
                {UserList.map((emp) =>(
                    <EmployeCard key ={emp.id} {...emp} />
                )
                )}
            </div>
        </div>
    )
};
export default EmployeeDashboard ;