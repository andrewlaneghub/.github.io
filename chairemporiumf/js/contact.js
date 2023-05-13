//Contact javascript - based on Chapter 6 exercise 3 code
"use strict";
const $ = (selector) => document.querySelector(selector);

//Get Date function from Chapter 12 Ex1
const getDate = (futureValue) => {
  const currentDate = new Date();

  let month = currentDate.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  let day = currentDate.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  const year = currentDate.getFullYear();

  const hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  const dateString = `Messaging at ${month}/${day}/${year} at ${hours}:${minutes}.`;
  return dateString;
};

document.addEventListener("DOMContentLoaded", () => {
  $("#send_email").addEventListener("click", () => {
    const email1 = $("#email_1");
    const issueReq = $("#issue");
    const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;

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

    if (issueReq.value == "") {
      issueReq.nextElementSibling.textContent =
        "Please write about the issue you are having. \n";
      isValid = false;
    } else {
      issueReq.nextElementSibling.textContent = "";
    }

    //submit
    if (isValid == true) {
      $("#email_form").submit();
      alert("Request has been sent.\n");
    }
  });

  //clear form
  $("#clear_form").addEventListener("click", () => {
    $("#email_1").value = "";
    $("#issue").value = "";

    $("#email_1").focus();
  });
  $("#email_1").focus();
  $("#date").text(getDate());
});
