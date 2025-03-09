document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const course = document.getElementById("course").value;
    const email = document.getElementById("email").value;

    var nameRegex = /^[a-zA-Z\s]+$/
    var ageRegex = /^\d+$/
    var mailRegex = /^[a-zA-Z0-9]+@gmail\.com/

    var validate = true

    if (nameRegex.test(name) == false)
    {
      document.querySelector(".nameError").style.display="inline"
      validate = false
      
    }
    else {
    document.querySelector(".nameError").style.display="none"
    }

    if (ageRegex.test(age) == false)
    {
    document.querySelector(".ageError").style.display="inline"
    validate = false
    
    }
    else {
    document.querySelector(".ageError").style.display="none"
    }

    if (gender == '')
    {
    document.querySelector(".genderError").style.display="inline"
    validate = false
    
    }
    else {
    document.querySelector(".genderError").style.display="none"
    }

    if (course == '')
    {
    document.querySelector(".courseError").style.display="inline"
    validate = false
    
    }
    else {
    document.querySelector(".courseError").style.display="none"
    }

    if (mailRegex.test(email) == false)
    {
    document.querySelector(".mailError").style.display="inline"
    validate = false
    
    }
    else {
    document.querySelector(".mailError").style.display="none"
    }

    if (validate == false)
    {
        return
    }
    else{
        alert("form submitted successfully")
    }
  
    // Create a new row in the table
    const tableBody = document.querySelector("#studentTable tbody");
    const newRow = document.createElement("tr");
  
    newRow.innerHTML = `
      <td data-label="Name:">${name}</td>
      <td data-label="Age:">${age}</td>
      <td data-label="Gender:">${gender}</td>
      <td data-label="Course:">${course}</td>
      <td data-label="Email:">${email}</td>
      <td data-label="Action:">
      <i id="edit" onclick="editRow(this)" class="fa-solid fa-user-pen"></i>
      <i id="trash" onclick="deleteRow(this)" class="fa-solid fa-trash"></i>
      </td>
    `;
  
    tableBody.appendChild(newRow);
  
    // Clear the form
    document.getElementById("registrationForm").reset();
  });
  
  function editRow(button) {
    const row = button.closest("tr");
    const cells = row.querySelectorAll("td");
  
    // Populate the form with the row's data
    document.getElementById("name").value = cells[0].textContent;
    document.getElementById("age").value = cells[1].textContent;
    document.getElementById("gender").value = cells[2].textContent;
    document.getElementById("course").value = cells[3].textContent;
    document.getElementById("email").value = cells[4].textContent;
  
    // Remove the row from the table
    row.remove();
  }
  
  function deleteRow(button) {
    const row = button.closest("tr");
    row.remove();
  }