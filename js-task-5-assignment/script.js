// Using const, let, var
const internName = "Onyinyechukwu Ezeogidi";
let taskOne = 10;
let taskTwo = 8;
var taskThree = 6;

// Calculate total and average
let total = taskOne + taskTwo + taskThree;
let average = total / 3;

// Determine grade using if-else
let grade;

if (average >= 9) {
  grade = "A";
} else if (average >= 8) {
  grade = "B";
} else if (average >= 7) {
  grade = "C";
} else if (average >= 6) {
  grade = "D";
} else {
  grade = "E";
}

// Display Output using template literals
console.log(`Student Name: ${internName}`);
console.log(`Task One: ${taskOne}`);
console.log(`Task Two: ${taskTwo}`);
console.log(`Task Three: ${taskThree}`);
console.log(`Average Score: ${average.toFixed(2)}`);
console.log(`Grade: ${grade}`);

// Use switch statement to show message
let message;

switch (grade) {
  case "A":
    message = "Excellent performance!";
    break;
  case "B":
    message = "Great job! Keep aiming high.";
    break;
  case "C":
    message = "Good effort. Try to improve.";
    break;
  case "D":
    message = "You're close. Keep working at it.";
    break;
  case "E":
    message = "Don't give up. You can do better next time.";
    break;
  default:
    message = "Invalid grade";
}

// ✅ Use backticks and variable correctly
console.log(`Message: ${message}`);



