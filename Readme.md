<!DOCTYPE html>
<html>
<head>
    <title>JSON to HTML Table</title>
</head>
<body>
    <div id="table-container"></div>
    <script>
    const jsonData = JSON.stringify([object Object],[object Object],[object Object], null, 4);

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
</html>
# Generated HTML from "output.html"

<!DOCTYPE html>
  <html>
  <head>
      <title>JSON to HTML Table</title>
  </head>
  <body>
  
<script>
    console.log("hello")
  </script>
  
  
  </body>
  </html>
