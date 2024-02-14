// Function to fetch pincode data for a given offset
async function fetchPincodeData(offset) {
    const response = await fetch(`https://api.postalpincode.in/pincode/?offset=${offset}`);
    const data = await response.json();
    return data;
  }
  
  // Call 1 - offset 31
  const call1Promise = fetchPincodeData(31);
  
  // Call 2 - offset 51
  const call2Promise = fetchPincodeData(51);
  
  // Call 3 - offset 61
  const call3Promise = fetchPincodeData(61);
  
  // Combine promises into an array
  const promises = [call1Promise, call2Promise, call3Promise];
  
  // Use Promise.all to wait for all promises to resolve
  Promise.all(promises)
    .then(results => {
      // Combine data from all calls using the spread operator
      const combinedData = [...results[0], ...results[1], ...results[2]];
      // Print all received data at once
      console.log(combinedData);
    })
    .catch(error => {
      console.error('Error fetching pincode data:', error);
    });
  