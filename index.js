// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the name of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is a description of the project?",
        name: "description"
    },
    {
        type: "input",
        message: "What are the installation instructions for your Project?",
        name: "installation"
    },
    {
        type: "input",
        message: "What is the usage information for your project?",
        name: "usage"
    },
    {
        type: "input",
        message: "What are the guidelines for contributions to your project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What are the testing instructions for your project?",
        name: "test"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([...questions])
    .then(response => console.log(response))
}

// Function call to initialize app
init();
