//Creates a form
var formcontainer = document.getElementById("formcontainer");
var form = document.createElement("form");
form.name = "myForm";
formcontainer.appendChild(form);

//Creates a Table row
var table = document.getElementById("dataTable");
var newRow = table.insertRow();

//Input fields configurations
var Input = [
  {
    name: "Itemname",
    placeholder: "Enter the name of items",
    type: "text",
    errorMsg: "Please enter the items",
    id: "itemname",
  },

  {
    name: "Price",
    placeholder: "Enter price of single item",
    type: "number",
    errorMsg: "Please enter the price",
    id: "price",
  },
  {
    name: "Quantity",
    placeholder: "Enter num of Quantity",
    type: "number",
    errorMsg: "Please enter the quantity",
    id: "quantity",
  },
  {
    name: "Date",
    placeholder: "Enter brought date",
    type: "date",
    errorMsg: "Please enter the date",
    id: "date",
  },
];

// Loop through Input array to create form input, labels, error message
for (i = 0; i < Input.length; i++) {
  //Creates labels
  var label = document.createElement("label");
  label.innerHTML = Input[i].name;
  form.appendChild(label);

  //Creates input
  var inputBox = document.createElement("input");
  inputBox.type = Input[i].type;
  inputBox.name = Input[i].name;
  inputBox.placeholder = Input[i].placeholder;
  inputBox.required = "true";
  form.appendChild(inputBox);

  //Creates error message with visibility hidden
  var small = document.createElement("span");
  small.id = Input[i].id;
  small.innerHTML = Input[i].errorMsg;
  form.appendChild(small);
}

//Creates a submit button
var add = document.createElement("button");
add.innerHTML = "Add items ";
add.setAttribute("type", "submit");
form.appendChild(add);

//Event when submit is clicked
add.addEventListener("click", function (event) {
  //prevent default form submission
  event.preventDefault();

  // Validation flag
  let isValid = true;

  // Check if any input is empty
  for (let i = 0; i < Input.length; i++) {
    var currentInput = document.myForm[Input[i].name];
    var currentElement = document.getElementById(Input[i].id);

    //Display error message
    if (currentInput.value === "") {
      currentElement.style.visibility = "visible";
      currentInput.style.border = "2px solid red";
      isValid = false;
    }
  }

//if input is not empty
  if (isValid) {
    console.log("successful");
    var newRow = table.insertRow();

    // Retrieve existing data from localStorage
    var existingData = localStorage.getItem("formData");
    var formDataArray = existingData ? JSON.parse(existingData) : [];

    // Create an object to store the form data
    var formData = {};
    
    //Insert in the table and local storage
    for (let i = 0; i < Input.length; i++) {
      var currentInput = document.myForm[Input[i].name];
      var currentElement = document.getElementById(Input[i].id);
      var currentCell = newRow.insertCell(i);
      currentCell.innerHTML = currentInput.value;
      currentElement.style.visibility = "hidden";
      currentInput.style.border = "1px solid #ccc";

      // Store the form data in the object
      formData[Input[i].name] = currentInput.value;
    }

   // Total price calculation
    var totalprice = document.createElement("p");
    a = document.myForm.Price.value;
    b = document.myForm.Quantity.value;
    totalprice.innerHTML = a * b;
    formData["totalprice"] = totalprice.innerHTML;
    newRow.insertCell(Input.length).appendChild(totalprice);

    // Add a delete button
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", function () {
      // Remove the current row when the delete button is clicked
      table.deleteRow(newRow.rowIndex);

    
    });
    newRow.insertCell(Input.length + 1).appendChild(deleteButton);

    // Save the updated array to localStorage
    formDataArray.push(formData);
    localStorage.setItem("formData", JSON.stringify(formDataArray));
    
    //Reset the form
    document.myForm.reset();
  }
});

// Load data from localStorage on page load
window.addEventListener("load", function () {
  loadTableFromLocalStorage();
});

// Function to load data from localStorage and populate the table
const loadTableFromLocalStorage =() => {               
  var existingData = localStorage.getItem("formData");
  var formDataArray = existingData ? JSON.parse(existingData) : [];
  
  //loop through local storage and insert in table
  for (let i = 0; i < formDataArray.length; i++) {
    var newRow = table.insertRow();
    for (let j = 0; j < Input.length; j++) {
      var currentCell = newRow.insertCell(j);
      currentCell.innerHTML = formDataArray[i][Input[j].name];
    }

    // Display total price in a new cell
    var totalprice = document.createElement("p");
    a = formDataArray[i].Price;
    b = formDataArray[i].Quantity;
    totalprice.innerHTML = a * b;
    newRow.insertCell(Input.length).appendChild(totalprice);

     // Remove the current row when the delete button is clicked
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", function () {
      table.deleteRow(newRow.rowIndex);
    });
    newRow.insertCell(Input.length + 1).appendChild(deleteButton);
  }
}


