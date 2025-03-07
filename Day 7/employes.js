var employees = [
    { id: 1, name: "Alice Johnson", position: "Software Engineer", department: "Engineering", isActive: true },
    { id: 2, name: "Bob Smith", position: "Product Manager", department: "Product", isActive: false },
    { id: 3, name: "Charlie Brown", position: "HR Specialist", department: "Human Resources", isActive: true },
    { id: 4, name: "Diana White", position: "Marketing Coordinator", department: "Marketing", isActive: true },
    { id: 5, name: "Ethan Davis", position: "Data Analyst", department: "Analytics", isActive: false }
];

const employeeList = document.getElementById("employeeList");

function displayEmployee(employeeArray) {
    employeeList.innerHTML = ""; // Clear previous list

    employeeArray.forEach(employee => {
        const employeeDiv = document.createElement("div");
        employeeDiv.classList.add("employee-card");

        employeeDiv.innerHTML = `
            <h3>${employee.name}</h3>
            <p><strong>ID:</strong>${employee.id}</p>
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

    // Attach event listeners to the buttons after rendering
    document.querySelectorAll(".toggle-status").forEach(button => {
        button.addEventListener("click", function () {
            let empId = parseInt(this.getAttribute("data-id"));
            toggleEmployeeStatus(empId);
        });
    });
}

// Function to toggle employee status
function toggleEmployeeStatus(empId) {
    let employee = employees.find(emp => emp.id === empId);
    if (employee) {
        employee.isActive = !employee.isActive; // Toggle the status
        displayEmployee(employees); // Re-render list
    }
}

document.addEventListener("DOMContentLoaded", function () {
    displayEmployee(employees);

    document.querySelector(".filter")?.addEventListener("click", function () {
        let activeEmployees = employees.filter(emp => emp.isActive);
        displayEmployee(activeEmployees);
    });

    document.querySelector(".sort")?.addEventListener("click", function () {
        let sortedEmployees = [...employees].sort((a, b) => a.name.localeCompare(b.name));
        displayEmployee(sortedEmployees);
    });

    document.querySelector(".map")?.addEventListener("click", function () {
        let names = employees.map(emp => emp.name);
        employeeList.innerHTML = "";

        names.forEach(name => {
            const nameDiv = document.createElement("div");
            nameDiv.classList.add("employee-card");
            nameDiv.innerHTML = `<h3>${name}</h3>`;
            employeeList.appendChild(nameDiv);
        });
    });
});
