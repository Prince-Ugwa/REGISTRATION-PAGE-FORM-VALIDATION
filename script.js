const myForm = document.querySelector("#my-form");
const FirstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const emailAddress = document.querySelector("#email");
const telephone = document.querySelector("#phone");
const gender = document.querySelector("#gender");
const country = document.querySelector("#country");
const userName = document.querySelector("#username");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const btn = document.querySelector("#btn");

////////////////////////////////////////////////////////////
////////////////////ERROR MESSAGE///////////////////////////////
const showErrorMsg = function (input, msgError) {
  const formControl = input.parentElement;
  if (formControl.classList.contains("success")) {
    formControl.classList.remove("success");
  }
  formControl.classList.add("danger");
  const errorMsg = formControl.querySelector("small");
  errorMsg.innerText = msgError;
};
/////////////////////APPROVE MESSAGE///////////////////////////////
const approveMsg = function (input) {
  const formControl = input.parentElement;
  if (formControl.classList.contains("danger")) {
    formControl.classList.remove("danger");
  }
  formControl.classList.add("success");
  // const errorMsg = formControl.querySelector("small");
  // errorMsg.innerText = msgError;
};

///////////////////////////////////////////////////////////////
const checkForValidInput = function (inputArrEl) {
  inputArrEl.forEach((inputEl) => {
    if (inputEl.value.trim() === "") {
      showErrorMsg(inputEl, `${inputField(inputEl)} is required`);
    } else approveMsg(inputEl);
  });
};
//////////////////////////////////////////////////////////
/////////////get field length length//////////////////
const checkLength = function (inputSize, min) {
  if (inputSize.value.length < min) {
    showErrorMsg(
      inputSize,
      `${inputField(inputSize)} should be at least ${min} characters`
    );
  } else {
    approveMsg(inputSize);
  }
};
/////////FROM STACK OVERFLOW////////////////////
function checkValidEmail(input) {
  const regularExpression =
    /^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
  if (regularExpression.test(input.value.trim())) {
    approveMsg(input);
  } else {
    showErrorMsg(input, "Provide a valid email");
  }
}
///////////////////////////////////////////////////////
////////////////W3RESORCES.COM/////////////////
function checkPhone(input, max) {
  const re = /^[0-9]{11}$/;
  if (input.value.match(re)) {
    approveMsg(input);
    return;
  } else {
    showErrorMsg(
      input,
      `${inputField(input)} has no letter and must be ${max} digits`
    );
    return false;
  }
}
//////////////////////////CHECK PASSWORD////////////////////////////////////
function checkConfirmPassword() {
  if (confirmPassword.value.trim() === "") {
    showErrorMsg(confirmPassword, "Confirm password");
  } else if (confirmPassword.value !== password.value) {
    showErrorMsg(confirmPassword, "Password do not match");
  } else {
    approveMsg(confirmPassword);
  }
}
////////////get the input field////////////////
const inputField = function (eachInputField) {
  return eachInputField.id.charAt(0).toUpperCase() + eachInputField.id.slice(1);
};

///////////////////check to reset form/////////////////////////////////////
function formIsCorrect() {
  const allFormCtrl = myForm.querySelectorAll(".form-control");
  let inputResult = true;
  allFormCtrl.forEach((inputParent) => {
    if (inputParent.classList.contains("danger")) {
      inputResult = false;
    }
  });
  return inputResult;
}
////////////////////////////////////////////////////////////////////////////
myForm.addEventListener("submit", function (e) {
  // e.preventDefault();
  checkForValidInput([
    FirstName,
    lastName,
    emailAddress,
    telephone,
    gender,
    country,
    userName,
    password,
    // confirmPassword,
  ]);
  checkLength(FirstName, 2);
  checkLength(lastName, 2);
  checkLength(userName, 4);
  checkLength(password, 7);
  checkValidEmail(emailAddress);
  checkPhone(telephone, 11);
  checkConfirmPassword(confirmPassword);
  // myForm.reset();
  if (formIsCorrect() === true) {
    myForm.reset();
  } else {
    e.preventDefault();
  }
});

////////////////////PRACTICE.///////////////////////
// const checkForValidInput  = function () {
//   ////////////////////////CHECK FOR FIRST NAME///////////////////////
//   if (FirstName.value.trim() === "") {
//     showErrorMsg(FirstName, "First name is required");
//   } else if (FirstName.value.trim().length < 2) {
//     showErrorMsg(FirstName, "First name cannot be one character");
//   } else {
//     approveMsg(FirstName);
//   }
//   /////////////////////////CHECK FOR LAST NAME///////////////////
//   if (lastName.value.trim() === "") {
//     showErrorMsg(lastName, "Last name is required");
//   } else if (lastName.value.trim().length < 2) {
//     showErrorMsg(lastName, "Last name cannot be one character");
//   } else {
//     approveMsg(lastName);
//   }

//   ////////////////////////CHECKED FOR EMAIL///////////////////
//   ////////////////////////////////////////////////////////
//   function validateEmail(email) {
//     const regularExpression =
//       /^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
//     return regularExpression.test(email);
//   }
//   //////////////////////////////////////////////////////////
//   if (emailAddress.value.trim() === "") {
//     showErrorMsg(emailAddress, "Provide email address");
//   } else if (validateEmail(emailAddress.value)) {
//     approveMsg(emailAddress);
//   } else {
//     showErrorMsg(emailAddress, "Please provide a valid email");
//   }

//   ////////////////////////CHECK PHONE//////////////////////////////////
//   function validatePhone(phone) {
//     const re = /^[0-9]{11}$/;
//     return re.test(phone);
//   }
//   if (telephone.value.trim() === "") {
//     showErrorMsg(telephone, "Provide phone number");
//   } else if (validatePhone(telephone.value)) {
//     approveMsg(telephone);
//   } else {
//     showErrorMsg(telephone, "provide a valid phone number with 11 digits");
//   }
//   /////////////////////////////CHECK GENDER////////////////////////////
//   if (gender.value.trim() === "") {
//     showErrorMsg(gender, "Gender cant be empty");
//   } else {
//     approveMsg(gender);
//   }
//   ////////////////////////CHECK COUNTRY///////////////////////////////
//   if (country.value.trim() === "") {
//     showErrorMsg(country, "country cant be empty");
//   } else {
//     approveMsg(country);
//   }
//   ////////////////////////check username//////////////////////////////
//   if (userName.value.trim() === "") {
//     //////////////////////////CHECK FOR USERNAME////////////////
//     showErrorMsg(userName, "username  name is required");
//   } else if (userName.value.trim().length <= 6) {
//     showErrorMsg(userName, "username name cannot below 7 characters");
//   } else {
//     approveMsg(userName);
//   }

//   ////////////////////////CHECK PASSWORD///////////////////////
//   if (password.value.trim() === "") {
//     showErrorMsg(password, "Password is required");
//   } else if (password.value.trim().length <= 7) {
//     showErrorMsg(password, "Password must be at least 8 characters");
//   } else {
//     approveMsg(password);
//   }
//   if (confirmPassword.value.trim() === "") {
//     showErrorMsg(confirmPassword, "Confirm password");
//   } else if (confirmPassword.value !== password.value) {
//     showErrorMsg(confirmPassword, "Password do not match");
//   } else {
//     approveMsg(confirmPassword);
//   }
// };
///////////////////check to reset form///////////////
// function formIsCorrect() {
//   const allFormCtrl = myForm.querySelectorAll(".form-control");
//   let inputResult = true;
//   allFormCtrl.forEach((inputParent) => {
//     if (inputParent.classList.contains("danger")) {
//       inputResult = false;
//     }
//   });
//   return inputResult;
// }
