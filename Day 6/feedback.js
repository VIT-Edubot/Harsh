// feedback.js - JavaScript for LaunchDarkly Employee Portal Feedback Form

// Variable declarations
let userName = "";
let userEmail = "";
const defaultSatisfied = true;
let isSatisfied = defaultSatisfied;

// Feature ratings object
let featureRatings = {
    feature1: 0,
    feature2: 0,
    feature3: 0
};

// Function to calculate total score
function calculateTotalScore() {
    const totalScore = featureRatings.feature1 + featureRatings.feature2 + featureRatings.feature3;
    const maxPossibleScore = 15;
    const averageScore = totalScore / 3;

    return {
        total: totalScore,
        average: averageScore,
        percentage: (totalScore / maxPossibleScore) * 100
    };
}

// Function to get selected satisfaction value
function getSatisfactionValue() {
    const selectedOption = document.querySelector('input[name="satisfied"]:checked');
    return selectedOption ? selectedOption.value : "Not selected";
}

// Function to validate form inputs
function validateForm(event) {
    event.preventDefault();

    userName = document.getElementById("name").value.trim();
    userEmail = document.getElementById("email").value.trim();
    isSatisfied = getSatisfactionValue();

    featureRatings.feature1 = parseInt(document.getElementById("feature1").value) || 0;
    featureRatings.feature2 = parseInt(document.getElementById("feature2").value) || 0;
    featureRatings.feature3 = parseInt(document.getElementById("feature3").value) || 0;

    let isValid = true;

    // Validate name
    if (!userName) {
        document.getElementById("nameError").textContent = "Please enter your name";
        isValid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    // Validate email
    if (!userEmail || !userEmail.includes("@")) {
        document.getElementById("emailError").textContent = "Please enter a valid email";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    if (isValid) {
        displayFeedbackResult();
        document.getElementById("feedbackForm").reset();
    }
}

// Function to display feedback result
function displayFeedbackResult() {
    const scoreResults = calculateTotalScore();
    const feedbackResultDiv = document.getElementById("feedbackResult");
    feedbackResultDiv.innerHTML = `
        <div class="success-message">
            <h3>Thank you for your feedback, ${userName}!</h3>
            <p>Your average rating: ${scoreResults.average.toFixed(1)} out of 5</p>
            <p>Satisfaction: ${isSatisfied}</p>
        </div>
    `;
    feedbackResultDiv.style.display = "block";
}

// Function to update rating display
function updateRatingDisplay(featureId, value) {
    document.getElementById(`${featureId}Value`).textContent = value;
    featureRatings[featureId] = parseInt(value);
}

// Initialize event listeners on DOM load
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("feedbackForm")?.addEventListener("submit", validateForm);
    document.getElementById("resetButton")?.addEventListener("click", function () {
        document.getElementById("feedbackForm").reset();
        document.getElementById("feedbackResult").style.display = "none";
    });

    document.querySelectorAll(".rating-slider").forEach(input => {
        input.addEventListener("input", function () {
            updateRatingDisplay(this.id, this.value);
        });
        updateRatingDisplay(input.id, input.value);
    });
});
