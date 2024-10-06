#!/usr/bin/node

// Display welcome message
console.log('Welcome to Holberton School, what is your name?');

// Read input from stdin
process.stdin.setEncoding('utf-8');

process.stdin.on('data', (input) => {
  const name = input.trim(); // Trim any extra whitespace/newlines from the input
  console.log(`Your name is: ${name}`);

  if (process.stdin.isTTY) {
    // TTY mode (interactive terminal), manually close when user presses Enter
    process.exit();
  }
});

// When stdin is closed (in case of piping input), display the closing message
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
