"use strict";

const ps = require("prompt-sync");
const prompt = ps();

// Set the correct password
const correctPassword = 'Juswaaaaa';

// Initialize a variable to store the user's input
let userInput;

// Use a do-while loop to keep asking for the password until it matches the correct one
do {
  // Prompt the user to enter a password
  userInput = prompt('Enter your password: ');

  // Check if the input is incorrect
  if (userInput !== correctPassword) {
    console.log('Incorrect, try again.');
  }
} while (userInput !== correctPassword);

// Log a success message to the console when the correct password is entered
console.log('Access granted.');