let form = document.querySelector("form");
let textfFaild = document.querySelector(".text-field");
let textlFaild = document.querySelector(".text-field1");
let phoneField = document.querySelector(".phone-field");
let emailField = document.querySelector(".email-field");
let passField = document.querySelector(".pass-field");

let fn = document.querySelector(".fn");
let ln = document.querySelector(".ln");
let pas = document.querySelector(".pass");
let pho = document.querySelector(".pho");
let ema = document.querySelector(".ema");


form.addEventListener("submit", function (e) {
  e.preventDefault();

  let fnameRegex = /^[A-Z][a-z]{3,20}$/;
  let myfName = textfFaild.value;
  let firstName = fnameRegex.test(myfName);

  let lnameRegex = /^[A-Z][a-z]{3,20}$/;
  let mylName = textlFaild.value;
  let lastName = lnameRegex.test(mylName);

  let phoneRegex = /^(01)[0-9]{9}$/;
  let myphone = phoneField.value;
  let phone = phoneRegex.test(myphone);

  let passRegex = /^[0-9]{3,10}$/;
  let mypass = passField.value;
  let pass = passRegex.test(mypass);

  let emailRegex = /^\w[A-Za-z0-9+=^%&]{0,20}(@gmail.com)$/;
  let emailName = emailField.value;
  let email = emailRegex.test(emailName);

  
  fn.innerHTML = '';
  ln.innerHTML = '';
  pho.innerHTML = '';
  pas.innerHTML = '';
  ema.innerHTML = '';

  if (!firstName) {
    console.log("Error first name");
    fn.innerHTML = `Please check the first letter and use only words.`;
  } else if (!lastName) {
    console.log("Error last name");
    ln.innerHTML = `Please check the first letter and use only words.`;
  } else if (!phone) {
    console.log("Error phone");
    pho.innerHTML = `Error in phone`;
  } else if (!pass) {
    console.log("Error pass");
    pas.innerHTML = `Error in pass`;
  } else if (!email) {
    console.log("Error email");
    ema.innerHTML = `Error in Email`;
  } else {
    console.log("ALL Data Done");

  

    Swal.fire({
      title: "Good",
      text: "ALL Data Done!!",
      icon: "success",
    }).then(() => {
      window.location.href = "./Users/index.html";
    });

  }
});




  