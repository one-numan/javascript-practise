console.log("Welcome URL_Web_Api");
// const url_api = new URL(location);
console.log("Your Browser Location", location);

let main_block = document.getElementById("main");

const location_api_obj_keys = [
  "hash",
  "host",
  "hostname",
  "href",
  "hostname",
  "href",
  "origin",
  "pathname",
  "port",
  "protocol",
  "search",
];
/**

for (let obj_key of location_api_obj_keys) {
  let val = location[obj_key];
  if (val.length == 0) {
    val = "No Data";
  }
  console.log(`Keys ${obj_key} and Values ${location[obj_key]} `);
}
 */

function createTable() {
  // Create the table element.
  const table = document.createElement("table");
  table.classList.add = ".table";
  // table.classList.add("table");
  table.setAttribute("border", "1");

  // Create the table header row.
  const headerRow = document.createElement("tr");
  const headerCell1 = document.createElement("th");
  const headerCell2 = document.createElement("th");
  headerCell1.textContent = "Keys";
  headerCell2.textContent = "Values";
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  table.appendChild(headerRow);

  for (let obj_key of location_api_obj_keys) {
    let dataRow1 = document.createElement("tr");
    const dataCell11 = document.createElement("td");
    dataCell11.style.fontWeight = "Bold";
    const dataCell12 = document.createElement("td");
    dataCell11.textContent = obj_key;
    dataCell12.textContent = location[obj_key];
    dataRow1.appendChild(dataCell11);
    dataRow1.appendChild(dataCell12);
    table.appendChild(dataRow1);
    let val = location[obj_key];
    if (val.length == 0) {
      dataCell12.textContent = "No Data";
    }
    console.log(`Keys ${obj_key} and Values ${location[obj_key]} `);
  }
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

  main_block.append(table);
}
createTable();
