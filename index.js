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
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What other information would you like to add to the Questions section?",
        name: "questions"
    },
    {
       type: "list",
       message: "Choose a license to include on your project",
       choices: ["MIT", "GNU GPLv3", "Apache License 2.0"],
       name: "license" 
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("readME.md", generateMarkdown(data), (err) => {
        err ? console.error(err) : console.log("Successfully made!");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([...questions])
    .then(data => writeToFile(data))
}

// Function call to initialize app
init();
