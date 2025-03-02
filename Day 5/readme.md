# Feedback Form - JavaScript Implementation

## Overview
This project is a **Feedback Form** for the **LaunchDarkly Employee Portal**, built using JavaScript. It collects user feedback, validates inputs, calculates feature ratings, and displays results dynamically.

## Features
- Collects **user name, email, and satisfaction level**.
- Takes **feature ratings** (on a scale of 1-5).
- Validates **name and email input**.
- Dynamically **updates rating values** as the user interacts.
- **Calculates total and average rating scores**.
- Displays a **success message** after form submission.
- Prevents submission if there are validation errors.

## Code Explanation

### **1. Variable Declarations**
```js
var userName = ""; // Stores user's name
let userEmail = ""; // Stores user's email
const defaultSatisfied = true; // Default satisfaction value
let isSatisfied = defaultSatisfied; // Stores user’s satisfaction status
```
**Usage:** Stores input values from the form.

```js
let featureRatings = {
    feature1: 0,
    feature2: 0,
    feature3: 0
};
```
**Usage:** Stores feature ratings provided by the user.

---

### **2. Calculate Total Score**
```js
function calculateTotalScore() {
    const totalScore = featureRatings.feature1 + featureRatings.feature2 + featureRatings.feature3;
    const maxPossibleScore = 15;
    const averageScore = totalScore / 3;

    console.log(`Total Score: ${totalScore} out of ${maxPossibleScore}`);
    console.log(`Average Score: ${averageScore.toFixed(2)} out of 5`);

    return {
        total: totalScore,
        average: averageScore,
        percentage: (totalScore / maxPossibleScore) * 100
    };
}
```
**Usage:** This function calculates the total rating score, the maximum possible score, and the percentage. The results are logged for debugging.

---

### **3. Form Validation**
```js
function validateForm(event) {
    event.preventDefault();
    userName = document.getElementById("name").value.trim();
    userEmail = document.getElementById("email").value.trim();
    isSatisfied = document.getElementById("satisfied").checked;
```
**Usage:**
- Prevents default form submission.
- Retrieves values from input fields.

#### **Name Validation**
```js
if (userName === "") {
    document.getElementById("nameError").textContent = "Please enter your name";
    isValid = false;
} else {
    document.getElementById("nameError").textContent = "";
    console.log(`Name validated: ${userName}`);
}
```
**Usage:** Ensures the name field is not empty.

#### **Email Validation**
```js
if (userEmail === "" || !userEmail.includes("@")) {
    document.getElementById("emailError").textContent = "Please enter a valid email address";
    isValid = false;
} else {
    document.getElementById("emailError").textContent = "";
    console.log(`Email validated: ${userEmail}`);
}
```
**Usage:** Ensures the email field contains an "@" symbol.

---

### **4. Displaying Feedback Results**
```js
if (isValid) {
    const scoreResults = calculateTotalScore();
    document.getElementById("feedbackResult").innerHTML = `
        <div class="success-message">
            <h3>Thank you for your feedback, ${userName}!</h3>
            <p>Your average rating: ${scoreResults.average.toFixed(1)} out of 5</p>
            <p>Satisfaction: ${isSatisfied ? "Yes" : "No"}</p>
        </div>`;
    document.getElementById("feedbackResult").style.display = "block";
    document.getElementById("feedbackForm").reset();
    console.log("Form submitted successfully!");
}
```
**Usage:**
- Calls `calculateTotalScore()` to compute ratings.
- Displays a success message including the user’s name, average rating, and satisfaction status.
- Resets the form.

---

### **5. Updating Feature Ratings in Real-Time**
```js
function updateRatingDisplay(featureId, value) {
    const displayElement = document.getElementById(`${featureId}Value`);
    if (displayElement) {
        displayElement.textContent = value;
    }
    featureRatings[featureId] = parseInt(value);
    console.log(`Updated ${featureId} rating to ${value}`);
}
```
**Usage:**
- Updates displayed rating value dynamically.
- Stores the updated rating in `featureRatings`.

---

### **6. Event Listeners for Form Submission and Sliders**
```js
document.addEventListener("DOMContentLoaded", function() {
    console.log("Document loaded - initializing form handlers");
    const feedbackForm = document.getElementById("feedbackForm");
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", validateForm);
    }

    const ratingInputs = document.querySelectorAll(".rating-slider");
    ratingInputs.forEach(input => {
        input.addEventListener("input", function() {
            updateRatingDisplay(this.id, this.value);
        });
        updateRatingDisplay(input.id, input.value);
    });
});
```
**Usage:**
- Listens for form submission and calls `validateForm()`.
- Listens for user interaction with sliders and calls `updateRatingDisplay()`.

## **How It Works**
1. The user fills out the **feedback form**.
2. **Validation checks** ensure the form is correctly filled.
3. If valid, it **calculates the rating score**.
4. A **success message is displayed** with the user's rating and feedback.
5. **Sliders dynamically update** the displayed values.
6. If validation fails, **error messages appear** for name or email.

## **How to Use**
1. Open the HTML page containing the feedback form.
2. Fill out **Name**, **Email**, and **Feature Ratings**.
3. Click **Submit**.
4. The form will display feedback and clear after submission.

## **Potential Enhancements**
- Store feedback in a **database** or local storage.
- Implement **API integration** for backend processing.
- Add a **spinner or animation** when submitting feedback.
- Include **more features** for detailed ratings.

## **Conclusion**
This JavaScript implementation provides a **real-time, interactive feedback system** that ensures **validation, dynamic rating updates, and success messaging**. 🚀

