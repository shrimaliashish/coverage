const fs = require("fs");

// JSON data (replace this with your own JSON data)
const jsonData = [
  { name: "John", age: 30, city: "New York" },
  { name: "Alice", age: 25, city: "Los Angeles" },
  { name: "Bob", age: 35, city: "Chicago" },
];

// Function to generate HTML table
function generateHTMLTable(data) {
  let html = `
# JSON to HTML Table

This example demonstrates how to generate an HTML table from JSON data using JavaScript.

## Usage

1. Create an HTML container element (e.g., a \`<div>\`) to hold the table.
2. Parse the JSON data into a JavaScript object.
3. Generate the HTML table structure using JavaScript.
4. Populate the table rows and cells with data from the JSON object.
5. Append the table to the container element.

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>JSON to HTML Table</title>
</head>
<body>
    <div id="table-container"></div>

    <script>
        // JSON data (replace this with your own JSON data)
        const jsonData = ${JSON.stringify(data, null, 4)};

        // Get the container element
        const container = document.getElementById("table-container");

        // Create a table element
        const table = document.createElement("table");
        table.border = "1"; // Add a border for styling (optional)

        // Create the table header row
        const headerRow = table.insertRow(0);
        for (const key in jsonData[0]) {
            if (jsonData[0].hasOwnProperty(key)) {
                const headerCell = headerRow.insertCell(-1);
                headerCell.textContent = key;
            }
        }

        // Create table rows and cells for JSON data
        for (let i = 0; i < jsonData.length; i++) {
            const dataRow = table.insertRow(-1);
            for (const key in jsonData[i]) {
                if (jsonData[i].hasOwnProperty(key)) {
                    const cell = dataRow.insertCell(-1);
                    cell.textContent = jsonData[i][key];
                }
            }
        }

        // Append the table to the container
        container.appendChild(table);
    </script>
</body>
</html>
\`\`\`

Replace the \`jsonData\` variable with your JSON data, and this code will generate an HTML table dynamically based on the JSON structure. This example assumes that the JSON data is an array of objects, where each object represents a row, and the object properties represent the table columns.
`;

  return html;
}

// Function to write HTML content to a file
function writeHTMLToFile(fileName, content) {
  fs.writeFileSync(fileName, content);
  console.log(`${fileName} file created successfully.`);
}

// Usage: Replace these variables with your own data and file name
const outputFileName = "Readme.md";
const readmeContent = generateHTMLTable(jsonData);

// Write the generated HTML to a file
writeHTMLToFile(outputFileName, readmeContent);
