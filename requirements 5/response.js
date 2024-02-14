import fs from 'fs/promises';

(async () => {
  try {
    // Read the contents of response.json asynchronously
    const jsonData = await fs.readFile('response.json', 'utf-8');
  
    // Parse the JSON data into a JavaScript object
    const response = JSON.parse(jsonData);
  
    console.log(response); // To verify the content
  } catch (error) {
    console.error('Error:', error);
  }
})();
