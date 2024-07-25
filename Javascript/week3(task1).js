// Define the tellFortune function
function tellFortune(numberOfChildren, partnerName, location, jobTitle) {
    // Construct the fortune message
    const fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numberOfChildren} kids.`;

    // Get the fortune container element
    const fortuneContainer = document.getElementById('fortune-container');

    // Create a new div element to hold the fortune
    const fortuneElement = document.createElement('div');
    fortuneElement.className = 'fortune';
    fortuneElement.textContent = fortune;

    // Append the new fortune element to the fortune container
    fortuneContainer.appendChild(fortuneElement);
}

// Call the tellFortune function three times with different values
tellFortune(2, "XYZ", "New York", "Software Developer");
tellFortune(3, "ABC", "San Francisco", "Graphic Designer");
tellFortune(1, "PQR", "London", "Data Scientist");
