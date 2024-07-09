#!/usr/bin/env node

import { prompt } from 'inquirer';
import chalk from 'chalk';

async function main() {
  const answers = await prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter your Name: ',
    },
    {
      type: 'input',
      name: 'age',
      message: 'Enter your Age: ',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email: ',
    },
  ]);

  const { name, age, email } = answers;

  console.log(chalk.green('Your Name is:', name));
  console.log(chalk.green('Your Age is:', age));
  console.log(chalk.green('Your email is:', email));
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
