import fs from 'fs/promises';

(async () => {
  try {
    // Read the contents of response.json asynchronously
    const jsonData = await fs.readFile('response.json', 'utf-8');
  
    // Parse the JSON data into a JavaScript object
    const response = JSON.parse(jsonData);
  
    console.log(response); // To verify the content
    
    // Now you can use the 'response' variable for further operations
    const mappedArray = response.map(item => {
        return { "name": item.name, "year": item.year };
    });

    console.log("Mapped Array:");
    console.log(mappedArray);

    const filteredArray = response.filter(item => item.year > 2020);
  
    console.log("\nFiltered Array (Year > 2020):");
    console.log(filteredArray);
  
  } catch (error) {
    console.error('Error:', error);
  }
})();



// Assuming response.json is already loaded and stored in the variable response

// Simulating response.json data
/*const response = [
    { "name": "Item 1", "year": 2019 },
    { "name": "Item 2", "year": 2021 },
    { "name": "Item 3", "year": 2022 },
    { "name": "Item 4", "year": 2020 },
    { "name": "Item 5", "year": 2023 }
];*/

// Using map function to create a list of objects with only 'name' and 'year' properties
const mappedArray = response.map(item => {
    return { "name": item.name, "year": item.year };
});

console.log("Mapped Array:");
console.log(mappedArray);

// Using filter function to filter out objects with 'year' higher than 2020
const filteredArray = response.filter(item => item.year > 2020);

console.log("\nFiltered Array (Year > 2020):");
console.log(filteredArray);
