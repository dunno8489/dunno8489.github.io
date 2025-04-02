// Get the current URL
const queryString = window.location.search; // e.g., "?id=1"

// Parse the query string
const urlParams = new URLSearchParams(queryString);

// Get the 'id' parameter value
const id = urlParams.get("id");

// Check if 'id' exists and load the corresponding JSON
if (id) {
    // Construct the JSON file path dynamically
    const jsonFilePath = `https://limeware.is-a.dev/lwonline/asset/json/${id}.json`;

    // Fetch the JSON file
    fetch(jsonFilePath)
        .then(response => {
            if (!response.ok) {
                throw new Error("JSON file not found");
            }
            return response.json();
        })
        .then(data => {
            // Display the JSON data
            const container = document.getElementById("data-container");
            container.innerHTML = `
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Age:</strong> ${data.age}</p>
                <p><strong>City:</strong> ${data.city}</p>
            `;
        })
        .catch(error => {
            console.error("Error loading JSON:", error);
            document.getElementById("data-container").innerHTML = `<p>Unable to load data. Check the URL and try again.</p>`;
        });
} else {
    document.getElementById("data-container").innerHTML = `<p>No ID specified in the URL!</p>`;
}
