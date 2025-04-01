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
            <div class="employee-info">
                <h3 class="emp-name">${employee.name}</h3>
                <p><strong>ID:</strong> ${employee.id}</p>
                <p><strong>Position:</strong> <span class="emp-position">${employee.position}</span></p>
                <p><strong>Department:</strong> <span class="emp-department">${employee.department}</span></p>
                <p><strong>Status:</strong> <span class="${employee.isActive ? 'active' : 'inactive'}">
                    ${employee.isActive ? 'Active' : 'Inactive'}
                </span></p>
            </div>

            <div class="edit-form hidden">
                <strong>Name:</strong> <input type="text" class="edit-name" value="${employee.name}">
                <strong>Position:</strong> <input type="text" class="edit-position" value="${employee.position}">
                <strong>Department:</strong> <input type="text" class="edit-department" value="${employee.department}">
                <button class="save" data-id="${employee.id}">Save</button>
            </div>

            <button class="toggle-status" data-id="${employee.id}">
                ${employee.isActive ? "Mark Inactive" : "Mark Active"}
            </button>
            <button class="edit" data-id="${employee.id}">Edit</button>
            <button class="delete" data-id="${employee.id}">Delete</button>
        `;

        employeeList.appendChild(employeeDiv);
    });

    attachEventListeners();
}

function attachEventListeners() {
    document.querySelectorAll(".toggle-status").forEach(button => {
        button.addEventListener("click", function () {
            let empId = parseInt(this.getAttribute("data-id"));
            toggleEmployeeStatus(empId);
        });
    });

    document.querySelectorAll(".edit").forEach(button => {
        button.addEventListener("click", function () {
            let empId = parseInt(this.getAttribute("data-id"));
            toggleEdit(empId);
        });
    });

    document.querySelectorAll(".save").forEach(button => {
        button.addEventListener("click", function () {
            let empId = parseInt(this.getAttribute("data-id"));
            saveEdit(empId);
        });
    });

    document.querySelectorAll(".delete").forEach(button => {
        button.addEventListener("click", function () {
            let empId = parseInt(this.getAttribute("data-id"));
            deleteEmployee(empId);
        });
    });
}

function toggleEmployeeStatus(empId) {
    let employee = employees.find(emp => emp.id === empId);
    if (employee) {
        employee.isActive = !employee.isActive;
        displayEmployee(employees);
    }
}

function toggleEdit(empId) {
    let employeeDiv = document.querySelector(`.edit[data-id='${empId}']`).closest(".employee-card");
    let infoSection = employeeDiv.querySelector(".employee-info");
    let editForm = employeeDiv.querySelector(".edit-form");

    editForm.classList.toggle("hidden");
    infoSection.classList.toggle("hidden");
}

function saveEdit(empId) {
    let employeeDiv = document.querySelector(`.save[data-id='${empId}']`).closest(".employee-card");
    let employee = employees.find(emp => emp.id === empId);

    if (employee) {
        employee.name = employeeDiv.querySelector(".edit-name").value;
        employee.position = employeeDiv.querySelector(".edit-position").value;
        employee.department = employeeDiv.querySelector(".edit-department").value;
    }
    displayEmployee(employees);
}

function deleteEmployee(empId) {
    employees = employees.filter(emp => emp.id !== empId);
    displayEmployee(employees);
}

// Functionality for Adding Employees
document.querySelector(".add")?.addEventListener("click", function () {
    const name = document.querySelector(".add-name").value.trim();
    const position = document.querySelector(".add-position").value.trim();
    const department = document.querySelector(".add-department").value.trim();
    
    if (!name || !position || !department) {
        alert("Please fill in all fields.");
        return;
    }

    const newEmployee = {
        id: employees.length ? Math.max(...employees.map(emp => emp.id)) + 1 : 1,
        name,
        position,
        department,
        isActive: true
    };

    employees.push(newEmployee);
    displayEmployee(employees);

    // Clear input fields after adding
    document.querySelector(".add-name").value = "";
    document.querySelector(".add-position").value = "";
    document.querySelector(".add-department").value = "";
});

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
