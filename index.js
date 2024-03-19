// magicify.js

const axios = require('axios');
const fs = require('fs');

/**
 * Function to capitalize the first letter of each word in a string.
 * @param {string} str - The input string.
 * @returns {string} - The string with first letter of each word capitalized.
 */
function capitalizeWords(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

/**
 * Function to fetch a random quote from an external API.
 * @returns {Promise<string>} - A promise that resolves with a random quote.
 */
async function getRandomQuote() {
  try {
    const response = await axios.get('https://api.quotable.io/random');
    return response.data.content;
  } catch (error) {
    throw new Error('Failed to fetch random quote');
  }
}

/**
 * Function to write content to a file.
 * @param {string} filename - The name of the file to write to.
 * @param {string} content - The content to write to the file.
 * @returns {Promise<void>} - A promise that resolves when the file is written.
 */
function writeToFile(filename, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, content, err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

module.exports = {
  capitalizeWords,
  getRandomQuote,
  writeToFile
};
