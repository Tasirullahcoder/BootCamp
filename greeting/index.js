#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


function generateEidGreeting(name) {
    return chalk.green(`Eid Mubarak, ${name}! 🌙`);
}

async function collectRecipientDetails() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the recipient\'s name:'
        }
    ]);
    return answers;
}

async function main() {
    const { name } = await collectRecipientDetails();
    const greeting = generateEidGreeting(name);
    console.log(greeting);
}

main();