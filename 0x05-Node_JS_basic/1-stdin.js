// Display the welcome message and ask for the user's name
console.log('Welcome to Holberton School, what is your name?');

// Listen for the user's input on stdin
process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // Convert input to string and remove any extra spaces or newlines
  console.log(`Your name is: ${name}`);

  // Exit the program after input is provided
  process.exit();
});

// When the process is about to exit, display the closing message
process.on('exit', () => {
  console.log('This important software is now closing');
});

// Export the function (if needed for tests)
module.exports = {};
