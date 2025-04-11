# LaunchDarkly User Dashboard - useState Assignment

## Approach

This dashboard uses React's `useState` to manage local component state:
- **Name** (`name`): A string updated through a controlled input field.
- **Status** (`isActive`): A boolean toggled via a button to show "Active"/"Inactive".
- **Theme** (`theme`): A string `"light"` or `"dark"` saved to localStorage for persistence.

## User Interactions

- Changing the **name** updates the UI immediately.
- Toggling **status** dynamically changes the text and shows an inactive message.
- Toggling **theme** updates styles and stores the preference in `localStorage`.

## Challenges

- Ensuring the theme,name and Active persisted correctly on reload required initializing state from `localStorage`.
- Styling the theme dynamically required conditional classes and smooth transitions.

## Outcome

This project helped solidify understanding of `useState`, controlled components, and user interaction in React.
