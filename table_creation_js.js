// console.log("Hi");
let main = document.getElementById("main");
// console.log(main);

// let table = document.createElement("table");
// let table_row = document.createElement("tr");
// let table_data = document.createElement("td");

// main.append(table);
// table.appendChild(table_row);
// table_row.append(table_data);
// table_row.append(table_data);
// table_row.cells;
function createTable() {
  // Create the table element.
  const table = document.createElement("table");
  table.setAttribute("border", "1");

  // Create the table header row.
  const headerRow = document.createElement("tr");
  const headerCell1 = document.createElement("th");
  const headerCell2 = document.createElement("th");
  headerCell1.textContent = "Column 1";
  headerCell2.textContent = "Column 2";
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  table.appendChild(headerRow);

  // Create the first row of data.
  const dataRow1 = document.createElement("tr");
  const dataCell11 = document.createElement("td");
  const dataCell12 = document.createElement("td");
  dataCell11.textContent = "Row 1, Column 1";
  dataCell12.textContent = "Row 1, Column 2";
  dataRow1.appendChild(dataCell11);
  dataRow1.appendChild(dataCell12);
  table.appendChild(dataRow1);

  // Create the second row of data.

  //   const dataRow2 = document.createElement("tr");
  //   const dataCell21 = document.createElement("td");
  //   const dataCell22 = document.createElement("td");
  //   dataCell21.textContent = "Row 2, Column 1";
  //   dataCell22.textContent = "Row 2, Column 2";
  //   dataRow2.appendChild(dataCell21);
  //   dataRow2.appendChild(dataCell22);
  //   table.appendChild(dataRow2);

  // Append the table to the document body.
  console.log(table);
  //   document.body.appendChild(table);

  main.append(table);
}

createTable();
