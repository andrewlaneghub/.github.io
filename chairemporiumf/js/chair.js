//Contact javascript - based on Chapter 6 exercise 3 code
"use strict";
const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
  $("#purchase_form").addEventListener("click", () => {
    const quantity1 = $("#quantity");

    let isValid = true;

    //Checks to see if textbox entries are empty
    if (quantity1.value == "") {
      quantity1.nextElementSibling.textContent =
        "Please enter how many chairs you want. \n";
      isValid = false;
    } else if (quantity1.value >= 0) {
      quantity1.nextElementSibling.textContent =
        "This product is out of stock! \n";
      isValid = false;
    } else {
      quantity1.nextElementSibling.textContent = "";
    }

    //submit
    if (isValid == true) {
      $("#purchase_form").submit();
      alert("Item added to cart.\n");
    }
  });

  $("#purchase").focus();
});
