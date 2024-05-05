const fs = require("fs");
function writeTokenToFile(token) {
  // Specify the file path where you want to save the token
  const filePath = "token.txt";

  // Write the token to the file
  fs.writeFileSync(filePath, token);
}

// Function to read token from file
function readTokenFromFile() {
  // Specify the file path from where you want to read the token
  const filePath = "token.txt";

  try {
    // Read the token from the file
    const token = fs.readFileSync(filePath, "utf8");
    return token;
  } catch (err) {
    // Handle errors, such as file not found
    console.error("Error reading token from file:", err);
    return null;
  }
}

module.exports = {
  writeTokenToFile,
  readTokenFromFile,
};
