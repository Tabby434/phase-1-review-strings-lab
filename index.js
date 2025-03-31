// Write your code in this file!

// Define currentUser with a name of your choice
const currentUser = 'Grace Hopper';

// Define welcomeMessage using template literals
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Define excitedWelcomeMessage by converting welcomeMessage to uppercase
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// Define shortGreeting using slice() to get the first character of currentUser
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

// Export variables for testing (if required by your setup)
module.exports = { currentUser, welcomeMessage, excitedWelcomeMessage, shortGreeting };

