const { expect } = require('chai'); // Import Chai for assertions
const sinon = require('sinon');     // Import Sinon for spying on console.log
const displayMessage = require('../0-console'); // Import the function to test

describe('displayMessage', () => {
    it('should log the correct message to the console', () => {
        // Create a spy on console.log
        const consoleSpy = sinon.spy(console, 'log');
        const message = "Hello NodeJS!"; // Expected message

        // Call the function
        displayMessage(message);

        // Assert that console.log was called once with the correct message
        expect(consoleSpy.calledOnceWithExactly(message)).to.be.true;

        // Restore the original console.log behavior
        consoleSpy.restore();
    });
});

