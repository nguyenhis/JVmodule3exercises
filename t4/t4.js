'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
var targetElement = document.getElementById("target");
for (var i = 0; i < students.length; i++) {
  var optionItem = document.createElement("option");
  optionItem.value = students[i].id;
  optionItem.textContent = students[i].name;
  targetElement.appendChild(optionItem);
        }