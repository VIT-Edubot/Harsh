# Employee Dashboard with React

## Overview
This project implements an Employee Management System using React. It demonstrates the use of props and component composition.

## File Structure
- `App.jsx`: Renders the `EmployeeDashboard` component.
- `EmployeeDashboard.jsx`: Holds the employee list and passes data to `EmployeeCard` as props.
- `EmployeeCard.jsx`: Displays individual employee details.
- `Header.jsx`: Displays the title of the dashboard.

## Key Concepts
- **Props**: Data is passed from `EmployeeDashboard` to `EmployeeCard` using props.
- **Component Composition**: Small components (`Header`, `EmployeeCard`) are composed to form the `EmployeeDashboard`.
- **Reusability**: `EmployeeCard` is used multiple times by mapping through an employee list.

## Challenges
- Ensuring the `EmployeeCard` component was reusable and dynamically received data.
- Managing layout using CSS to make it visually appealing.
