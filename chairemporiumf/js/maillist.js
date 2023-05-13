//Maillist javascript - based on Chapter 6 exercise 3 code
"use strict";
const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
  $("#join_list").addEventListener("click", () => {
    //Email pattern from Chapter 13
    const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;

    const email1 = $("#email_1");
    const email2 = $("#email_2");
    const firstName = $("#first_name");

    let isValid = true;

    //Checks to see if textbox entries are empty
    if (email1.value == "") {
      email1.nextElementSibling.textContent =
        "Please enter your email address. \n";
      isValid = false;
    } else if (!emailPattern.test(email1)) {
      email1.nextElementSibling.textContent =
        "Please enter a valid email address. \n";
    } else {
      email1.nextElementSibling.textContent = "";
    }

    if (email2.value == "") {
      email2.nextElementSibling.textContent =
        "Please confirm your email address. \n";
      isValid = false;
    } else if (!emailPattern.test(email2)) {
      email2.nextElementSibling.textContent =
        "Please enter a valid email address. \n";
    } else {
      email2.nextElementSibling.textContent = "";
    }

    if (firstName.value == "") {
      firstName.nextElementSibling.textContent =
        "Please enter your first name. \n";
      isValid = false;
    } else {
      firstName.nextElementSibling.textContent = "";
    }

    //Checks to see if both emails are the same
    if (email2.value !== email1.value) {
      alert("Make sure both emails match.\n");
      isValid = false;
    }

    //submit
    if (isValid == true) {
      $("#email_form").submit();
      alert("Thank you for signing up for our Mail List!\n");
    }
  });

  //clear form
  $("#clear_form").addEventListener("click", () => {
    $("#email_1").value = "";
    $("#email_2").value = "";
    $("#first_name").value = "";

    $("#email_1").focus();
  });
  $("#email_1").focus();
});
