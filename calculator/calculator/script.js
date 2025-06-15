
// Initialize variables
let string = "";
let history = []; // Array to hold history

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.button');
  const historyList = document.getElementById('history-list');
  const input = document.querySelector('input');

  // Add event listeners to buttons
  Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
      const value = e.target.innerHTML;
      
      if (value === '=') {
        try {
          let expression = string; // Store the expression before evaluation
          string = eval(string);
          input.value = string;

          // Append full calculation to history
          history.push(`${expression} = ${string}`);
          updateHistory();
        } catch (error) {
          input.value = "Error"; // Handle evaluation errors
          string = "";
        }
      } else if (value === 'C') {
        string = "";
        input.value = string;
      } else if (value === '%') {
        // Handle percentage
        try {
          string = (parseFloat(string) / 100).toString();
          input.value = string;
        } catch (error) {
          input.value = "Error";
          string = "";
        }
      } else if (value === 'M+' || value === 'M-') {
        // Memory functions - placeholder for now
        console.log('Memory function clicked:', value);
      } else {
        string += value; // Concatenate button value
        input.value = string;
      }
    });
  });

  // Function to update history display
  function updateHistory() {
    historyList.innerHTML = ""; // Clear the current history list
    history.forEach((item) => {
      let li = document.createElement('li');
      li.textContent = item; // Display each history item
      historyList.appendChild(li);
    });
  }
});
