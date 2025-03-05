# Feedback Form - LaunchDarkly Employee Portal

## Overview
This project contains a feedback form for the LaunchDarkly Employee Portal. The form allows users to submit their name, email, satisfaction level, and feature ratings. The responses are processed and displayed dynamically using JavaScript.

## Features
- User input validation for name and email.
- Satisfaction selection using radio buttons.
- Feature rating using sliders.
- Real-time score calculation and feedback display.
- Reset functionality for the form.

## Technologies Used
- HTML
- CSS
- JavaScript

## How It Works
1. The user fills in their name and email.
2. They select their satisfaction level (Yes/No).
3. They rate three features using sliders (1-5 scale).
4. When the form is submitted:
   - Validation checks ensure the required fields are filled correctly.
   - The total and average feature ratings are calculated.
   - The feedback is displayed dynamically.
5. The reset button clears the form and hides the result section.

## File Structure
- `index.html` - Structure of the feedback form.
- `styles.css` - Styling for the form and feedback display.
- `feedback.js` - Handles form validation, score calculation, and event handling.

## Setup Instructions
1. Clone the repository or download the files.
2. Open `index.html` in a web browser.
3. Interact with the form to provide feedback.

## Event Listeners in `feedback.js`
- **Form Submission**: Validates input and processes feedback.
- **Rating Sliders**: Updates the displayed rating in real time.
- **Reset Button**: Clears all inputs and hides feedback.

## Example Use Case
A LaunchDarkly employee visits the portal and submits feedback about new features. They provide their name, email, satisfaction level, and rate features using sliders. Upon submission, a summary of their ratings and satisfaction is displayed.

## Future Improvements
- Store feedback in a database for analysis.
- Implement backend integration for persistent feedback storage.
- Add more dynamic UI elements for better user experience.

## License
This project is open-source and free to use for educational and internal purposes.

