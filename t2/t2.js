var targetElement = document.getElementById("target");

var firstItem = document.createElement("li");

firstItem.innerHTML = "First item";

var secondItem = document.createElement("li");

secondItem.innerHTML = "Second item";

secondItem.classList.add("my-item");

var thirdItem = document.createElement("li");

thirdItem.innerHTML = "Third item";

targetElement.appendChild(firstItem);
targetElement.appendChild(secondItem);
targetElement.appendChild(thirdItem);