// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT") {
    return `MIT License`
  } else if (license === "GNU GPLv3") {
    return `GNU GENERAL PUBLIC LICENSE
    Version 3, 29 June 2007`
  } else if (license === "Apache License 2.0") {
    return `Apache License Version 2.0, January 2004`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "MIT") {
    return `[MIT License Link](https://choosealicense.com/licenses/mit/)`
  } else if (license === "GNU GPLv3") {
    return `[GNU GPLv3 License Link](https://choosealicense.com/licenses/gpl-3.0/)`
  } else if (license === "Apache License 2.0") {
    return `[Apache License 2.0 Link](http://www.apache.org/licenses/)`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "MIT") {
    return `MIT License

    Copyright (c) [year] [fullname]
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.`
  } else if (license === "GNU GPLv3") {
    return `GNU GENERAL PUBLIC LICENSE
    Version 3, 29 June 2007

    Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
    Everyone is permitted to copy and distribute verbatim copies
    of this license document, but changing it is not allowed.`
  } else if (license === "Apache License 2.0") {
    return `    Apache License
            Version 2.0, January 2004
          http://www.apache.org/licenses/`
  } else {
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge()}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  [1. Description](#description)

  [2. Installation Instructions](#installation-instructions)

  [3. Usage Information](#usage-information)

  [4. Contribution Guidelines](#contribution-guidelines)

  [5. Test Instructions](#test-instructions)

  [6. Questions](#questions)

  [7. License](#license)
  
  ## Installation instructions
  
  ${data.installation}
  
  ## Usage Information
  
  ${data.usage}
  
  ## Contribution Guidelines
  
  ${data.contribution}
  
  ## Test instructions
  
  ${data.test}
  
  ## Questions
  
  [Link to my Github](https://github.com/${data.github})

  ${data.email}

  ${data.questions}
  
  ## License

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  

`;
}

module.exports = generateMarkdown;
