#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"; // Import chalk library

function generateBirthdayWish(name) {
    return chalk.bold.blue(`Happy Birthday to you , ${name}! 🎉🎂`); // Apply chalk.red() to the output string
}

function displayBirthdayWish(name) {
    const wish = generateBirthdayWish(name);
    console.log(wish);
}

// Function to collect person details using Inquirer
async function collectRecipientDetails() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the person\'s name:'
        },
        {
            type: 'input',
            name: Date,
            message: 'Enter the person\'s date of birth:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the person\'s email address:'
        }
    ]);
    return answers;
}

// Main function
async function main() {
    // Collect person details
    const { name } = await collectRecipientDetails();
    
    // Display birthday wish
    displayBirthdayWish(name);
}

// Start the program
main();
