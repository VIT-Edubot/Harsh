# User Feedback Form

This project is a **User Feedback Form** that utilizes **HTML and CSS with Flexbox** to create a responsive and visually appealing design. The form is centered on the page, and the navigation bar is properly aligned using Flexbox.

---

## **Features**
- Responsive **User Feedback Form**
- **Navigation Bar** aligned in the center
- **Flexbox** used for layout improvements
- Proper **spacing and alignment** for a better user experience
- **Styled buttons and input fields**

---

## **HTML Structure**
The HTML file consists of:
1. **Navigation Bar**: A `<nav>` element containing an unordered list (`<ul>`) for menu links.
2. **Form Section**: The `<form>` includes various input fields such as text inputs, radio buttons, a dropdown, and a textarea for feedback.
3. **Multimedia Section**: Video and audio elements are added for reference.

---

## **CSS and Flexbox Implementation**
### **1. Navigation Bar Centering**
To align the navigation bar in the center, we used:
```css
nav {
    background-color: black;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

nav ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
}
```
- `display: flex;` enables Flexbox.
- `justify-content: center;` centers the navigation items.
- `align-items: center;` aligns items vertically.

### **2. Feedback Form Layout using Flexbox**
The feedback form layout is structured using Flexbox for proper alignment and responsiveness:
```css
#feedback-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border: 2px solid black;
    padding: 20px;
    margin: 20px auto;
    max-width: 600px;
    width: 90%;
    background: white;
    border-radius: 8px;
    gap: 15px;
}
```
- `display: flex;` makes the form a flex container.
- `flex-direction: column;` stacks form elements vertically.
- `justify-content: center;` ensures proper alignment.
- `gap: 15px;` adds spacing between elements.

### **3. Responsive Design for Mobile Screens**
To make the form responsive for smaller screens (below 768px width):
```css
@media (max-width: 768px) {
    body {
        flex-direction: column;
        align-items: center;
    }

    #feedback-form {
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    input, select, textarea {
        font-size: 14px;
    }

    button {
        width: 100%;
    }
}
```
- `@media (max-width: 768px) {...}` applies styles for mobile devices.
- `align-items: center;` centers the form elements.
- `width: 100%;` ensures input fields take the full width.
- `button { width: 100%; }` makes the button more accessible.

---

## **How to Use the Code**
1. Download or clone the repository.
2. Open the `feedback_form.html` file in a web browser.
3. The form will be displayed in the center of the page, and the navigation bar will be properly aligned.

---

## **Future Improvements**
- Add **JavaScript validation** for form fields.
- Enhance **styling and animations** for a modern look.
- Implement **backend support** to store user feedback.

---

### **Author:**
Developed by **Harsh Pahariya** 🚀

