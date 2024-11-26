const { expect } = require('chai');
const sinon = require('sinon');
const displayMessage = require('../0-console');

describe('displayMessage', () => {
    it('should log the correct message to the console', () => {
        const consoleSpy = sinon.spy(console, 'log');
        const message = "Hello NodeJS!";

        displayMessage(message);

        expect(consoleSpy.calledOnceWithExactly(message)).to.be.true;
        consoleSpy.restore();
    });
});

