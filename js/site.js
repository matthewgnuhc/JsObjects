let contacts = [];

// A contact to screen
function addContact() {
    alert("Aloha");

    //retrieve the items or values
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;

    //Creating an Object
    const contact = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };
    //push values to the array 
    contacts.push(contact);
    //call display contacts
    displayContacts(contacts);

    //Clear the form
    document.getElementById("myForm").reset();
}

function displayContacts(contacts) {

    document.getElementById("results").innerHTML = "";

    for (let index = 0; index < contacts.length; index++) {


        let templateRow = `<tr><td>${contacts[index].firstName}</td><td>${contacts[index].lastName}</td><td>${contacts[index].email}</td></tr>`

        document.getElementById("results").innerHTML += templateRow;
    }

}