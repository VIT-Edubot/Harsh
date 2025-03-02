// feedback.js - JavaScript for LaunchDarkly Employee Portal Feedback Form

// Variable declarations using var, let, and const
var userName = ""; // Using var for user's name
let userEmail = ""; // Using let for user's email
const defaultSatisfied = true; // Using const for default satisfaction value
let isSatisfied = defaultSatisfied; // This can be modified based on form input

// Feature ratings object
let featureRatings = {
    feature1: 0,
    feature2: 0,
    feature3: 0
};

// Function to calculate total score based on feature ratings
function calculateTotalScore() {
    console.log("Calculating total score...");

    // Get values from the featureRatings object
    const totalScore = featureRatings.feature1 + featureRatings.feature2 + featureRatings.feature3;
    const maxPossibleScore = 15; // 3 features × 5 points max
    const averageScore = totalScore / 3;

    console.log(`TotalScore: ${totalScore} out of ${maxPossibleScore}`);
    console.log(`AverageScore: ${averageScore.toFixed(2)} out of 5`);

    return {
        total: totalScore,
        average: averageScore,
        percentage: (totalScore / maxPossibleScore) * 100
    };
}

// Function to validate the form
function validateForm(event) {
    // Prevent the default form submission
    event.preventDefault();
    console.log("Form submission started - running validation checks...");

    // Get form values
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const satisfiedField = document.getElementById("satisfied");

    if (nameField) userName = nameField.value.trim();
    if (emailField) userEmail = emailField.value.trim();
    if (satisfiedField) isSatisfied = satisfiedField.checked;

    // Get feature ratings from form (ensure elements exist)
    featureRatings.feature1 = parseInt(document.getElementById("feature1")?.value) || 0;
    featureRatings.feature2 = parseInt(document.getElementById("feature2")?.value) || 0;
    featureRatings.feature3 = parseInt(document.getElementById("feature3")?.value) || 0;

    let isValid = true;
    let errorMessages = [];

    // Validate name (check if empty)
    const nameError = document.getElementById("nameError");
    if (!userName) {
        console.error("Error: Name field is empty");
        if (nameError) nameError.textContent = "Please enter your name";
        isValid = false;
        errorMessages.push("Name is required");
    } else {
        if (nameError) nameError.textContent = "";
        console.log(`Name validated: ${userName}`);
    }

    // Validate email (check for empty or invalid format)
    const emailError = document.getElementById("emailError");
    if (!userEmail) {
        console.error("Error: Email field is empty");
        if (emailError) emailError.textContent = "Please enter your email";
        isValid = false;
        errorMessages.push("Email is required");
    } else if (!userEmail.includes("@")) {
        console.error("Error: Invalid email format (missing @ symbol)");
        if (emailError) emailError.textContent = "Please enter a valid email address";
        isValid = false;
        errorMessages.push("Invalid email format");
    } else {
        if (emailError) emailError.textContent = "";
        console.log(`Email validated: ${userEmail}`);
    }

    // Log validation status
    console.log(`Form valid: ${isValid}`);
    console.log(`User satisfaction: ${isSatisfied ? "Satisfied" : "Not satisfied"}`);

    // If form is valid, process it
    if (isValid) {
        // Calculate scores
        const scoreResults = calculateTotalScore();

        // Display success message
        const feedbackResultDiv = document.getElementById("feedbackResult");
        if (feedbackResultDiv) {
            feedbackResultDiv.innerHTML = `
                <div class="success-message">
                    <h3>Thank you for your feedback, ${userName}!</h3>
                    <p>We have received your submission.</p>
                    <p>Your average rating: ${scoreResults.average.toFixed(1)} out of 5</p>
                    <p>Satisfaction: ${isSatisfied ? "Yes" : "No"}</p>
                </div>
            `;
            feedbackResultDiv.style.display = "block";
        }

        // Reset the form
        document.getElementById("feedbackForm")?.reset();
        console.log("Form submitted successfully!");
        return true;
    } else {
        console.warn("Form submission failed. Errors:", errorMessages);
        return false;
    }
}

// Function to update rating display as user interacts with sliders
function updateRatingDisplay(featureId, value) {
    const displayElement = document.getElementById(`${featureId}Value`);
    if (displayElement) {
        displayElement.textContent = value;
    }

    // Update the featureRatings object
    featureRatings[featureId] = parseInt(value);
    console.log(`Updated ${featureId} rating to ${value}`);
}

// Initialize event listeners when DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("Document loaded - initializing form handlers");

    // Attach event listener to the form
    const feedbackForm = document.getElementById("feedbackForm");
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", validateForm);
        console.log("Submit event listener added to form");
    } else {
        console.error("Form element not found. Check your HTML ID.");
    }

    // Add event listeners to rating sliders
    const ratingInputs = document.querySelectorAll(".rating-slider");
    ratingInputs.forEach(input => {
        input.addEventListener("input", function () {
            updateRatingDisplay(this.id, this.value);
        });

        // Initialize display values on page load
        updateRatingDisplay(input.id, input.value);
    });

    console.log("Form initialization complete");
});
