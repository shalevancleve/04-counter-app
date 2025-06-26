// We use let for count because its value will change
let count = 0;

// We use const for button and display because we do not reassign these variables
const increaseButton = document.getElementById("increase"); // 'const' because the button element does not change
const countDisplay = document.getElementById("count"); // 'const' because the display element does not change
const decreaseButton = document.getElementById("decrease"); // 'const' for the decrease button
const resetButton = document.getElementById("reset"); // 'const' for the reset button
const maxCapacity = 50; // 'const' because the max capacity does not change
const maxCapacityNotification = document.getElementById("max-capacity-notification"); // 'const' for the notification element
const belowZeroNotification = document.getElementById("below-zero-notification"); // 'const' for the below zero notification

increaseButton.onclick = function() {
  if (count < maxCapacity) {
    count++; // Increase the count by 1
    countDisplay.textContent = count; // Update the display
    maxCapacityNotification.style.display = "none"; // Hide max notification if showing
    belowZeroNotification.style.display = "none"; // Hide below zero notification if showing
  } else {
    maxCapacityNotification.style.display = "block"; // Show max capacity notification
    belowZeroNotification.style.display = "none"; // Hide below zero notification
  }
};

decreaseButton.onclick = function() {
  if (count > 0) {
    count--; // Decrease the count by 1
    countDisplay.textContent = count; // Update the display
    belowZeroNotification.style.display = "none"; // Hide below zero notification if showing
    maxCapacityNotification.style.display = "none"; // Hide max notification if showing
  } else {
    belowZeroNotification.style.display = "block"; // Show below zero notification
    maxCapacityNotification.style.display = "none"; // Hide max notification
  }
};

resetButton.onclick = function() {
  count = 0; // Set the count to zero
  countDisplay.textContent = count; // Update the display
  maxCapacityNotification.style.display = "none"; // Hide max notification if showing
  belowZeroNotification.style.display = "none"; // Hide below zero notification if showing
};