# React Theme Dashboard

## Hooks Used

### 🔹 useContext - Theme Management
The `ThemeContext` is used to globally manage the app’s theme (light/dark). Components can access and toggle the theme using `useTheme()`.

### 🔹 useMemo - Optimized Filtering
The `useMemo` hook ensures that the filtered user list is only recalculated when the search term changes, improving performance on large datasets.

### 🔹 useCallback - Stable Event Handlers
The click handler passed to child components is wrapped in `useCallback` to prevent unnecessary re-renders of `UserItem`, which is memoized using `React.memo`.

## Bonus
- `UserItem` is a memoized component to avoid unnecessary re-renders unless the `user` or `onClick` props change.
- Global body class is updated on theme change to apply dark/light styles.
