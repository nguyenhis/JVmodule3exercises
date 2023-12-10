'use strict';
const names = ['John', 'Paul', 'Jones'];
 var targetElement = document.getElementById("target");

 for (var i = 0; i < names.length; i++) {
   var listItem = document.createElement("li")
   listItem.innerHTML = names[i];
   targetElement.appendChild(listItem);
        }