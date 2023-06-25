// build a api interaction that will submit my form data to the server


let userTable = document.getElementById("outputTable");
let apiURL = "https://64949b9f0da866a953680923.mockapi.io/users/";
let formData=[];



// fetch data from api
fetch(apiURL)
.then(response => response.json())
.then(data => {formData = data;
console.log(formData);
}).then(() => {
    inputFormDataTable(formData)})
.catch(error => console.error(error));

// post data to api
function postData(data) {
    fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    });
}

function inputFormDataTable(data) {
// insert data into my table
for (let i = 0; i < data.length; i++) {
    let row = userTable.insertRow(i+1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    
    cell1.innerHTML = data[i].id;
    cell2.innerHTML = data[i].fName;
    cell3.innerHTML = data[i].lName;
    cell4.innerHTML = data[i].email;
    
}

function submitForm() {
console.log("this ran");
let fName = document.getElementById("fName").value;
let lName = document.getElementById("lName").value;
let email = document.getElementById("email").value;

let newUser = {
    "fName" : fName,
    "lName" : lName,
    "email" : email
}

postData(newUser);

}
document.getElementById("formButton").addEventListener("click", function(){
    submitForm();
});



}
