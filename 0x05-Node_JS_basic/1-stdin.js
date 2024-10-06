#!/usr/bin/node

// Display welcome message
console.log('Welcome to Holberton School, what is your name?');

// Read input from stdin
process.stdin.setEncoding('utf-8');

// Handle data input from user
process.stdin.on('data', (input) => {
  const name = input.trim(); // Trim any extra whitespace/newlines from the input
  console.log(`Your name is: ${name}`);
  
  // Display closing message
  console.log('This important software is now closing');

  // Exit the process
  process.exit();
});
