const fs = require("fs");

// JSON data (replace this with your own JSON data)
const data = [
  { name: "John", age: 30, city: "New York" },
  { name: "Alice", age: 25, city: "Los Angeles" },
  { name: "Bob", age: 35, city: "Chicago" },
];

// Function to generate HTML table
function generateHTMLTable(data) {
  let html = `<!DOCTYPE html>
  <html>
  <head>
      <title>JSON to HTML Table</title>
  </head>
  <body>
  
      <div id="table-container"></div>
      
      <script>
      
  
      const jsonData = JSON.stringify(${data}, null, 4);
  
      const container = document.getElementById("table-container");
      const table = document.createElement("table");
      table.border = "1"; 
      const headerRow = table.insertRow(0);
  
      for (const key in data[0]) {
          if (data[0].hasOwnProperty(key)) {
              const headerCell = headerRow.insertCell(-1);
              headerCell.textContent = key;
          }
      }
  
      for (let i = 0; i < data.length; i++) {
          const dataRow = table.insertRow(-1);
          for (const key in data[i]) {
              if (data[i].hasOwnProperty(key)) {
                  const cell = dataRow.insertCell(-1);
                  cell.textContent = data[i][key];
              }
          }
      }
  
      container.appendChild(table);
  </script>
  
  
  </body>
  </html>`;

  return html;
}

// Function to write HTML content to a file
function writeHTMLToFile(fileName, content) {
  fs.writeFileSync(fileName, content);
  console.log(`${fileName} file created successfully.`);
}

// Usage: Replace these variables with your own data and file name
const outputFileName = "Readme.md";
const readmeContent = generateHTMLTable(data);

// Write the generated HTML to a file
writeHTMLToFile(outputFileName, readmeContent);
