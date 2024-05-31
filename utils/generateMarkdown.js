// Create a function that returns a license badge(ICON) based on which license is passed in 
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license){
        case "MIT license":
            return "![License](https://img.shields.io/badge/License-MIT-green.svg)";
        case "Apache License 2.0":
            return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
        case "GNU General Public License v3.0":
            return "![License](https://img.shields.io/badge/License-GPLv3-blue.svg)";
        case "Mozilla Public License 2.0":
            return "![License](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
        case "The Unlicense":
            return "![License](https://img.shields.io/badge/License-Unlicense-green.svg)";
        default:
            return "";
    }

}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license){
        case "MIT license":
            return "[License: MIT](https://opensource.org/licenses/MIT)";
        case "Apache License 2.0":
            return "[License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)";
        case "GNU General Public License v3.0":
            return "[License: GPL v3](https://opensource.org/license/gpl-3-0/)";
        case "Mozilla Public License 2.0":
            return "[License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)";
        case "The Unlicense":
            return "[License: Unlicense](https://opensource.org/license/unlicense)";
        default:
            return ""
    }
    
}

return "![License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)";


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== undefined) {
        return `To read more about the ${license}, click here ==> ${renderLicenseLink(license)}.`;
    } else{
        return "";
    } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}
  - ${data.motivation}
  - ${data.build}
  - ${data.problem}
  - ${data.learned}
  
  ${renderLicenseBadge(data.license)}


  ## Table of contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribute](#contribute)
  * [Test](#test)
  * [Questions](#questions)
  * [License](#license) 
        
    
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribute
  ${data.contribute}
        
  ## Test
  ${data.test}

  ## Questions
  My Github profile can be located at <https://github.com/${data.userName}/>

  You can email me with any questions at ${data.email}

  ![screenshot](/assets/images/${data.screenshot})

  ## Credits
  ${data.credits}
        
  ## License

  ${renderLicenseSection(data.license)}

  ${renderLicenseBadge(data.license)}
  `;
}

export {generateMarkdown};
