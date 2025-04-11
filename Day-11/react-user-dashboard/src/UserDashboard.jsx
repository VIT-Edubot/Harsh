import React,{useState,useEffect} from "react";
function UserDashboard(){
    const[Name,SetName] = useState(() => {
        return localStorage.getItem("Name")||"Jhonny Gupta";
    });

    const [isActive, setIsActive] = useState(() => {
        const stored = localStorage.getItem("isActive");
        return stored === "false" ? false : true;
    });
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("Name",Name);
  },[Name]);

  useEffect(() =>{
    localStorage.setItem("isActive",isActive);
  },[isActive]);

  useEffect(() => {
    localStorage.setItem("theme",theme);
  },[theme]);

  const toggleStatus = () => {
    setIsActive((prev) =>!prev);
  };
    const toggleTheme =() =>{
        setTheme((prev) => (prev ==="light" ? "dark" : "light"))
    };
    const handleName = (e) => {
        SetName(e.target.value);
    };

    return (
        <div className = {`dashboard ${theme}`}>
            <div className = "user-info">
                <h2> Welcome, {Name} ^_^</h2>
                <input 
                type = "text"
                value = {Name}
                onChange = {handleName}
                placeholder="Enter your full Name"
                />

                <p> Status: {isActive ? "Active": "Inactive"} </p>
                {!isActive && (
                    <p className = "Inactive-message">
                        Your account is currently inactive. Please update your status.
                    </p>
                )}
                <button onClick ={toggleStatus}>
                    Set {isActive? "Inactive":"Active"}
                </button>
            </div>
            <div className ="theme-toggle">
                <button onClick = {toggleTheme}>
                    Toggle Theme
                </button>
                
            </div>
        </div>
    );

}


export default UserDashboard;