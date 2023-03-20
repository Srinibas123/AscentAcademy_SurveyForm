function validateForm() {
    var name = document.getElementById("name").value.trim();
    var age = document.getElementById("age").value.trim();
    var gender = document.getElementById("gender").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    var isValid = true;
    
    if (name == "") {
        document.getElementById("nameError").innerHTML = "Please enter your name";
        isValid = false;
    } else {
        document.getElementById("nameError").innerHTML = "";
    }
}