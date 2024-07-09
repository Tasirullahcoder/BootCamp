#!/usr/bin/env node
import inquirer from 'inquirer';
let appointments = []; //to store appointment data. Initially, it's empty

// Function to add appointment
function addAppointment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter patient name:'
        },
        {
            type: 'input',
            name: 'time',
            message: 'Enter appointment time:'
        },
        {
            type: 'input',
            name: 'contact',
            message: 'Enter patient contact number:'
        },
        {
            type: 'input',
            name: 'place',
            message: 'Enter patient place:'
        }
        
    ]).then(answers => {  // Code executed after the user answers the prompts
        appointments.push(answers);// Add the user's answers to the appointments array
        console.log('Appointment added successfully!');
        mainMenu();// Call the main menu function again to continue the program flow
    });
}

function viewAppointments() { // Code to display appointments
    console.log('Current Appointments:');
    appointments.forEach(appointment => {
        console.log(`- name ${appointment.name}: time ${appointment.time}: contact ${appointment.contact}: place ${appointment.place}:`);
    });
    mainMenu();
}

// Main menu function
function mainMenu() {
    inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'Choose an action:',
        choices: ['Add Appointment', 'View Appointments', 'Exit']
    }).then(answer => {
        switch (answer.action) {
            case 'Add Appointment':
                addAppointment();
                break;
            case 'View Appointments':
                viewAppointments();
                break;
            case 'Exit':
                console.log('Goodbye!');
                break;
        }
    });
}

// Start the program
mainMenu();

