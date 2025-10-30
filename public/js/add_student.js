// Get the objects we need to modify
let addStudentForm = document.getElementById('add-student-form-ajax');

// Modify the objects we need
addStudentForm.addEventListener("submit", function (e) {
    
    // Prevent the form from submitting
    e.preventDefault();

    // can switch to loop later!
    // Get form fields we need to get data from
    let inputFirstName = document.getElementById("input-firstName");
    let inputLastName = document.getElementById("input-lastName");
    let inputUsername = document.getElementById("input-userName");
    let inputPassword = document.getElementById("input-password");
    let inputEmail = document.getElementById("input-email");
    let inputVegan = document.getElementById("input-isVegan");
    let inputVegetarian = document.getElementById("input-isVegetarian");
    let inputDairy = document.getElementById("input-isDairyFree");
    let inputGluten = document.getElementById("input-isGlutenFree");
    let inputKosher = document.getElementById("input-isKosher");
    let inputHalal = document.getElementById("input-isHalal");

    // Get the values from the form fields
    let firstNameValue = inputFirstName.value;
    let lastNameValue = inputLastName.value;
    let usernameValue = inputUsername.value;
    let passwordValue = inputPassword.value;
    let emailValue = inputEmail.value;
    let veganValue = inputVegan.value;
    let vegetarianValue = inputVegetarian.value;
    let dairyValue = inputDairy.value;
    let glutenValue = inputGluten.value;
    let kosherValue = inputKosher.value;
    let halalValue = inputHalal.value;

    // Put our data we want to send in a javascript object
    let data = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        student_userName: usernameValue,
        student_password: passwordValue,
        student_email: emailValue,
        isVegan: veganValue,
        isVegetarian: vegetarianValue,
        isDairyFree: dairyValue,
        isGlutenFree: glutenValue,
        isKosher: kosherValue,
        isHalal: halalValue
    }
    
    // Setup our AJAX request
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/add-student-ajax", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    // Tell our AJAX request how to resolve
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {

            // Add the new data to the table
            addRowToTable(xhttp.response);

            // Clear the input fields for another transaction
            inputFirstName.value = '';
            inputLastName.value = '';
            inputUsername.value = '';
            inputPassword.value = '';
            inputEmail.value = '';
            inputVegan.value = '';
            inputVegetarian.value = '';
            inputDairy.value = '';
            inputGluten = '';
            inputKosher.value = '';
            inputHalal.value = '';
        }
        else if (xhttp.readyState == 4 && xhttp.status != 200) {
            console.log("There was an error with the input.")
        }
    }

    // Send the request and wait for the response
    xhttp.send(JSON.stringify(data));

})


// Creates a single row from an Object representing a single record from 
// bsg_people
addRowToTable = (data) => {

    // Get a reference to the current table on the page and clear it out.
    let currentTable = document.getElementById("student-table");

    // Get the location where we should insert the new row (end of table)
    let newRowIndex = currentTable.rows.length;

    // Get a reference to the new row from the database query (last object)
    let parsedData = JSON.parse(data);
    let newRow = parsedData[parsedData.length - 1]

    // Create a row and 4 cells
    let row = document.createElement("TR");
    let idCell = document.createElement("TD");
    let firstNameCell = document.createElement("TD");
    let lastNameCell = document.createElement("TD");
    let usernameCell = document.createElement("TD");
    let passwordCell = document.createElement("TD");
    let emailCell = document.createElement("TD");
    let veganCell = document.createElement("TD");
    let vegetarianCell = document.createElement("TD");
    let dairyCell = document.createElement("TD");
    let glutenCell = document.createElement("TD");
    let kosherCell = document.createElement("TD");
    let halalCell = document.createElement("TD");

    // Fill the cells with correct data
    idCell.innerText = newRow.id;
    firstNameCell.innerText = newRow.firstName;
    lastNameCell.innerText = newRow.lastName;
    usernameCell.innerText = newRow.student_userName;
    passwordCell.innerText = newRow.student_password;
    emailCell.innerText = newRow.student_email;
    veganCell.innerText = newRow.isVegan;
    vegetarianCell.innerText = newRow.isVegetarian;
    dairyCell.innerText = newRow.isDairy;
    glutenCell.innerText = newRow.isGlutenFree;
    kosherCell.innerText = newRow.isKosher;
    halalCell.innerText = newRow.isHalal;

    // Add the cells to the row 
    row.appendChild(idCell);
    row.appendChild(firstNameCell);
    row.appendChild(lastNameCell);
    row.appendChild(usernameCell);
    row.appendChild(passwordCell);
    row.appendChild(emailCell);
    row.appendChild(veganCell);
    row.appendChild(vegetarianCell);
    row.appendChild(dairyCell);
    row.appendChild(glutenCell);
    row.appendChild(kosherCell);
    row.appendChild(halalCell);
    
    // Add the row to the table
    currentTable.appendChild(row);
}