#!/usr/bin/node

// Display welcome message
console.log('Welcome to Holberton School, what is your name?');

// Read input from stdin
process.stdin.setEncoding('utf-8');

// Handle user input
process.stdin.on('data', (input) => {
  const name = input.trim();
  console.log(`Your name is: ${name}`);

  // Explicitly end stdin to allow test cases to finish
  process.stdin.end();
});

// When stdin is closed (for piping scenarios), print closing message
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
