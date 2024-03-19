# Layer-v22

Layer-v22 is a magical Node.js module for various string manipulations and file operations.

## Installation

You can install this module via npm: `npm install layer-v22`

## Usage
```javascript
const magicify = require('magicify');

// Example usage: capitalizeWords
console.log(magicify.capitalizeWords('hello world')); // Output: Hello World

// Example usage: getRandomQuote
magicify.getRandomQuote().then(quote => {
  console.log('Random Quote:', quote);
}).catch(error => {
  console.error('Error:', error.message);
});

// Example usage: writeToFile
const filename = 'output.txt';
const content = 'This is some content to write to the file.';
magicify.writeToFile(filename, content).then(() => {
  console.log('Content has been written to', filename);
}).catch(error => {
  console.error('Error:', error.message);
});
```


