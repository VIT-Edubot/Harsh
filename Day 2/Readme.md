# README - User Feedback Form

## Overview
This project implements a **User Feedback Form** for the LaunchDarkly employee portal. The form is designed to collect user feedback on the platform's latest updates while maintaining proper structure, accessibility, and media embedding.

## Features
- **User Input Fields:**
  - Name (Text Input)
  - Email (Email Input)
  - Satisfaction (Radio Buttons: Yes/No)
  - Favorite Feature (Dropdown Selection)
  - Additional Comments (Textarea)
- **Media Embedding:**
  - Embedded video tutorial
  - Embedded system update audio
- **Semantic HTML Structure:**
  - `<header>` for the form title
  - `<nav>` for navigation links
  - `<section>` and `<article>` for content organization
  - `<footer>` with copyright information
- **Accessibility & Validation:**
  - Proper `<label>` usage for form elements
  - Required fields with HTML5 validation
  - Placeholder text in the comment box

## File Structure
- `feedback_form.html`: Contains the complete implementation of the feedback form.
- `README.md`: Provides an overview of the project, structure, and key implementation details.

## Challenges & Solutions
- **Ensuring Semantic HTML:** Used `<section>`, `<article>`, `<header>`, and `<footer>` to properly organize content.
- **Form Validation:** Implemented `required` attributes and grouped radio buttons with `<fieldset>`.
- **Media Compatibility:** Included fallback text for `<video>` and `<audio>` for unsupported browsers.

## How to Use
1. Open `feedback_form.html` in a web browser.
2. Fill out the form with your feedback.
3. Click **Submit** to send your response.

## License
© 2024 LaunchDarkly. All rights reserved.

