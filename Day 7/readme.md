# Employee Management Portal

This project is a simple Employee Management Portal built using **HTML, CSS, and JavaScript**. It dynamically displays employee information and provides interactive features such as filtering, sorting, and toggling employee status.

## Features

- **Display Employees**: Shows a list of employees with their name, position, department, and active/inactive status.
- **Filter Active Employees**: Filters and displays only active employees.
- **Sort Employees by Name**: Sorts employees alphabetically by name.
- **Toggle Employee Status**: Allows users to mark employees as Active or Inactive.
- **Display Employee Names Only**: Maps and displays only the names of employees.

## Technologies Used

- **HTML**: Structure of the webpage.
- **CSS**: Styling of employee cards.
- **JavaScript**: Handles interactivity (event handling, DOM manipulation).

## How to Use

1. Open `index.html` in a web browser.
2. The list of employees will be displayed.
3. Click on:
   - **Filter Active Employees** to show only active employees.
   - **Sort Employees** to arrange employees alphabetically.
   - **Display Names Only** to show only names instead of full details.
   - **Toggle Status Button** on any employee card to mark them as Active/Inactive.

## Code Explanation

### Employee Data Structure
The employee data is stored as an array of objects:
```javascript
var employees = [
    { id: 1, name: "Alice Johnson", position: "Software Engineer", department: "Engineering", isActive: true },
    { id: 2, name: "Bob Smith", position: "Product Manager", department: "Product", isActive: false },
    // More employees...
];
```

### Display Employees
```javascript
function displayEmployee(employeeArray) {
    employeeList.innerHTML = ""; // Clear existing list
    
    employeeArray.forEach(employee => {
        const employeeDiv = document.createElement("div");
        employeeDiv.classList.add("employee-card");
        
        employeeDiv.innerHTML = `
            <h3>${employee.name}</h3>
            <p><strong>Position:</strong> ${employee.position}</p>
            <p><strong>Department:</strong> ${employee.department}</p>
            <p><strong>Status:</strong> <span class="${employee.isActive ? 'active' : 'inactive'}">
                ${employee.isActive ? 'Active' : 'Inactive'}
            </span></p>
            <button class="toggle-status" data-id="${employee.id}">
                ${employee.isActive ? "Mark Inactive" : "Mark Active"}
            </button>
        `;
        
        employeeList.appendChild(employeeDiv);
    });
}
```

### Toggle Employee Status
```javascript
function toggleEmployeeStatus(empId) {
    let employee = employees.find(emp => emp.id === empId);
    if (employee) {
        employee.isActive = !employee.isActive;
        displayEmployee(employees);
    }
}
```

## Future Enhancements
- Add search functionality.
- Store employee data persistently using **local storage**.
- Implement a backend with a database.

## Author
Developed by **Harsh Pahariya**

