https://codepen.io/Onyinye-Prisca/pen/OPyMBxP

// Profile object for Onyinyechukwu Ezeogidi
const upskillProfile = {
  name: "Onyinyechukwu Ezeogidi",
  age: 28,
  hobbies: ["Hairstyling", "Coding", "Reading"],

  introduce: function () {
    console.log(`Hi, my name is ${this.name}`);
  },
};

// Call the introduce method
upskillProfile.introduce();

// Log second best hobby
console.log("My second best hobby is:", upskillProfile.hobbies[1]);

// Callback function example
function greetUser(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

function showMessage() {
  console.log("Welcome to Upskill!");
}

// Using the callback with your full name
greetUser("Onyinyechukwu Ezeogidi", showMessage);
