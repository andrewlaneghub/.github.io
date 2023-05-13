"use strict";
/*From example 10-1, modified to fit bootstrap form*/
$(document).ready(() => {
  $("#submit").click((evt) => {
    let isValid = true;

    //company evaluation
    const company1 = $("#company").val().trim();
    if (company1 == "") {
      $("#company").siblings(".errorMsg").text("This field is required.");
      isValid = false;
    } else {
      $("#company").siblings(".errorMsg").text("");
    }
    $("#company").val(company1);

    //Name evaluation
    const name1 = $("#name").val().trim();
    if (name1 == "") {
      $("#name").siblings(".errorMsg").text("This field is required.");
      isValid = false;
    } else {
      $("#name").siblings(".errorMsg").text("");
    }
    $("#name").val(name1);


    // V
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    const email1 = $("#email").val().trim();
    if (email1 == "") {
      $("#email").siblings(".errorMsg").text("This field is required.");
      isValid = false;
    } else if (!emailPattern.test(email1)) {
      $("#email").siblings(".errorMsg").text("Must be a valid email address.");
      isValid = false;
    } else {
      $("#email").next().text("");
    }
    $("#email").val(email1);

    //Message evaluation
    const message1 = $("#message").val().trim();
    if (message1 == "") {
      $("#message").siblings(".errorMsg").text("This field is required.");
      isValid = false;
    } else {
      $("#message").siblings(".errorMsg").text("");
    }
    $("#message").val(message1);

    if (isValid == false) {
      evt.preventDefault();
    }
  });

  $("#company").focus();
});
