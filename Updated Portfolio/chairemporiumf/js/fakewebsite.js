"use strict";

//check to see if name is valid - based on textbook exercise "future value" from chapter 3
let name = "";

do {
  name = String(prompt("Hello customer, what is your name?", "name"));
} while (name === "" || name === isNaN);
document.write("<p>Welcome " + name + ", to Chair Emporium!");
