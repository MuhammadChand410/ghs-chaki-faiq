const contactForm = document.getElementById("contactForm");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const message = document.getElementById("message");


contactForm.addEventListener('submit', function (a) {
  a.preventDefault();
  if (firstName.value === "") {
    document.getElementById("firstNameError").innerText =
      "First name is required";

  } else {
    document.getElementById("firstNameError").innerText = "";

  }
  if (lastName.value === "") {
    document.getElementById("lastNameError").innerText =
      "Last name is required";

  } else {
    document.getElementById("lastNameError").innerText = "";

  }
  if (email.value === "") {
    document.getElementById("emailError").innerText =
      "Email is required";

  } else {
    document.getElementById("emailError").innerText = "";

  }
  if (phoneNumber.value === "") {
    document.getElementById("phoneNumberError").innerText =
      "Phone number is required";

  } else {
    document.getElementById("phoneNumberError").innerText = "";

  }
  if (message.value === "") {
    document.getElementById("messageError").innerText =
      "Message is required";

  } else {
    document.getElementById("messageError").innerText = "";

  }

})

var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });



