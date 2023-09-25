console.log("Hi");

// Input Field
const inputBox = document.getElementById("inputBox");

// console.log(getBtn);
const getBtn = document.getElementById("getBtn");
// Text Field Of URLStatus | Showing When No response & Status Code
const urlStatus = document.getElementById("urlStatus");
// Text Field for JsonData
const jsonData = document.getElementById("jsonData");

getBtn.addEventListener("click", () => {
  // Event Lisent When Click on Btn

  //Its Remove Old Data from Text URLStatus and JsonData
  urlStatus.innerText = "";
  jsonData.innerText = "";
  //   console.log(inputBox.value);
  // Important Fetch API Call passing the URL InputField Value
  fetchData(inputBox.value);
});

async function fetchData(url) {
  // Try Block of Exceptions
  try {
    //Calling Asyc Fetch Function
    let response = await fetch(url);
    // console.log("Response Status Code ", response.status);
    /** Code will be BreakOut Here If URL Wrong */

    // Showing Response Code In HTML Page
    urlStatus.innerText = `Response Code ${response.status}`;
    // console.log("Its Response", response);

    /** Code will be BreakOut Here If Unable to Convert into JSOn */
    let data = await response.json();

    //Showing Convert JSON into STR and Showing in HTML Section
    jsonData.innerText = JSON.stringify(data, undefined, 10);

    // console.log(data);
  } catch (error) {
    // If Error Occurs , Just Showing Unable to fetch
    // console.log(`Error {error}`, error);
    urlStatus.innerText = "Unable to Fetch ! Please Check Your URL";
    // Thank You ! Hope You UnderStand
    // Keep Learning
  }
}
