#!/usr/bin/env node

console.log('Welcome to Holberton School, what is your name?');

// Listen for user input
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);

  // If the input is from an interactive terminal, exit immediately
  if (process.stdin.isTTY) {
    process.exit(0);
  }
});

// Handle closing message for piped input
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
