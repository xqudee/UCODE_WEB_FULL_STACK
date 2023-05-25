var err = false;

var firstName = prompt("Enter your first name");

if (firstName.trim() == "") err = true;
for (let i = 0; i < firstName.length; i++) {
    if (!isNaN(firstName[i])) {
        err = true;
        break;
    }
}
if (err) {
    alert("Wrong input!");
    console.log(msgErr);
}
else {
    var lastName = prompt("Enter your last name");

    if (lastName.trim() == "") err = true;
    for (let i = 0; i < firstName.length; i++) {
        if (!isNaN(firstName[i]) || firstName.trim() == "") {
            err = true;
            break;
        }
    }
    if (err) {
        alert("Wrong input!");
        console.log(msgErr);
    }
    else {
        firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
        lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

        alert("Hello, " + firstName + " " + lastName);
    }
}