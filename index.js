// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
import { generateMarkdown } from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter a Title for your Project. ",
        name: "title", 
      },
      {
        type: "input",
        message: "Enter a brief description of what your project does.",
        name: "description", 
      },
      {
        type: "input",
        message: "What was your motivation??",
        name: "motivation", 
      },
      {
        type: "input",
        message: "Why did you build this project?",
        name: "build", 
      },
      {
        type: "input",
        message: "What problem does it solve?",
        name: "problem", 
      },
      {
        type: "input",
        message: "What did you learn?",
        name: "learned", 
      },
      {
        type: "input",
        message: "What are the Installation Instructions?",
        name: "installation",
      },
      {
        type: "input",
        message: "What is the usage of this project?",
        name: "usage",
      },
      {
        type: "list",
        message: 'What license type do you want to use for this project? (Use the up/down arrow keys to select, then press ENTER)',
        name: 'license',
        choices: [
            "MIT license", 
            "Apache License 2.0", 
            "GNU General Public License v3.0",
            "Mozilla Public License 2.0",
            "The Unlicense",
        ]
      },
      {
        type: "input",
        message: "How does someone contribute to this project?",
        name: "contribute",
      },
      {
        type: "input",
        message: "what are the test conditions for this project?",
        name: "test",
      },
      {
        type: "input",
        message: "Please enter your GitHub username.",
        name: "userName",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter who need to be credited for the work on this project.",
        name: "credits",
      },    
      {
        type: "input",
        message: "What is the FILE NAME for the screenshot?",
        name: "screenshot",
      },
];

// TODO: Create a function to write README file
function writeToFile(README, questions) {
    fs.writeFile("New_README.md", readMe, (err) =>
        err ? console.log(colors.bgBrightRed(err)) : console.log(colors.bgBrightGreen("success!"))
    );
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();

