const inputContainer = document.querySelector(".input-container");

const todoInput = document.querySelector(
  ".input-container input[type='textuser']"
);

// Defining a function to display error message
const printError = (elemId, hintMsg) => {
  document.getElementById(elemId).innerHTML = hintMsg;
};

// console.log(todoInput);
console.log(localStorage);
// localStorage.clear();

inputContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  const userValue = document.getElementById("user-value").value;
  const emailValue = document.getElementById("email-value").value;
  const passValue = document.getElementById("pass-value").value;

  // Defining default state for error variable
  var nameError = (emailError = passError = true);

  // Validate Name
  if (userValue == "") {
    printError("nameErr", "Please Enter your name");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(userValue) === false) {
      printError("nameErr", "Please Enter a Valid Name");
    } else {
      printError("nameErr", "");
      nameError = false;
    }
  }

  // Validate email address
  if (emailValue == "") {
    printError("emailErr", "Please Enter your email address");
  } else {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(emailValue) === false) {
      printError("emailErr", "Please Enter a valid email address");
    } else {
      printError("emailErr", "");
      emailError = false;
    }
  }

  // Validate password
  if (passValue == "") {
    printError("passErr", "Please Enter your password");
  } else {
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (regex.test(passValue) === false) {
      printError("passErr", "Enter a difficult password (min 8 char)");
    } else {
      printError("passErr", "");
      passError = false;
    }
  }

  console.log(userValue);
  console.log(emailValue);
  console.log(passValue);

  // const userObject = JSON.stringify({
  //   username: userValue,
  //   phone: passValue,
  //   email: emailValue,
  // });

  // localStorage.setItem("user", userObject);
  console.log(nameError, emailError, passError);

  console.log(localStorage);

  if (nameError == false && emailError == false && passError == false) {
    const userObject = JSON.stringify({
      username: userValue,
      phone: passValue,
      email: emailValue,
    });

    localStorage.setItem("user", userObject);
    window.location = "./index.html";
  }
});
