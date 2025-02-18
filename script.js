let count = 0; // Using let because count will change

const enterButton = document.getElementById('increase'); // Using const because enterButton will not change
const display = document.getElementById('count'); // Using const because display will not change

enterButton.addEventListener('click', function() {
    count++; // Increase the count
    display.textContent = count; // Update the display
});

const exitButton = document.getElementById('decrease'); // Using const because exitButton will not change

exitButton.addEventListener('click', function() {
    if (count > 0) { // Check if count is greater than 0
        count--; // Decrease the count
        display.textContent = count; // Update the display
    }
});

const resetButton = document.getElementById('reset'); // Using const because resetButton will not change

resetButton.addEventListener('click', function() {
    count = 0; // Reset the count to zero
    display.textContent = count; // Update the display
});
