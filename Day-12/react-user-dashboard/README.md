# 🚀 React User Dashboard

This is a simple React-based dashboard that displays a list of active employees at LaunchDarkly. It demonstrates fetching data using `useEffect`, managing side effects, and adding interactivity through search and dynamic updates.

## 🔧 Features

- **Data Fetching**: Fetches employee data from a mock API (or `db.json`) using `useEffect`.
- **Loading State**: Shows a loading message while data is being fetched.
- **Unique Entries**: Filters out employees with duplicate IDs.
- **Live Search**: Allows users to search employees by name.
- **Document Title Timer**: Updates the browser tab title every 5 seconds with the total number of users.
- **Styled UI**: Clean user interface with custom CSS and a logo next to each employee's detail.

## 📁 Files

- `src/App.jsx` – Main entry rendering the dashboard.
- `src/UserList.jsx` – Handles fetching, displaying, and filtering employees.
- `src/styles.css` – Contains the styling for the UI.
- `db.json` – Mock employee data for local API via `json-server`.

## ▶️ Getting Started

```bash
npm install
npm run dev
