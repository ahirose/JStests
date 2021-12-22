//"use strict";

const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const todoNr = document.querySelector(".todo-nr b");
const mainTitle = document.querySelector(".main-title");
const items = todoList.children;
const nameInput = document.querySelector(".name-input");

//todoNr.innerText = items.length;

//click, scroll, resizing the browser
//Attach an event listener

button.addEventListener("click", function (e) {
  //stop to submit(reload)
  e.preventDefault();

  const newItem = document.createElement("li");
  //adding class
  newItem.classList.add("item");
  //adding item
  //newItem.innerText = `Item ${items.length + 1}`;
  newItem.innerText = nameInput.value;

  todoList.appendChild(newItem);
  //console.log(todoList);
  todoNr.innerText = items.length;

  //why it can't show property on chrome
  //show on firefox
  //value will be null even set the "" after this log
  console.log(nameInput);

  //delete value on text
  nameInput.value = "";

  //create the element and attaching the listner
  newItem.addEventListener("click", deleteItem);

  //console.log(mainTitle);
});

for (let item of items) {
  item.addEventListener("click", deleteItem);
}

function deleteItem(e) {
  //console.log(e.target);
  e.stopPropagation();
  e.target.remove();
  todoNr.innerText = items.length;
}

todoList.addEventListener("click", function () {
  console.log("UL executes");
  todoList.classList.toggle("fade");
});

// document.addEventListener("keydown", function (event) {
//   console.log("key" + event);
// });

// console.log(button);

// //button.addEventListener("keydown", function (event) {
// button.addEventListener("click", function (event) {
//   //   mainTitle.style.color = "red";
//   //   mainTitle.style.fontSize = "500px";
//   //
//   console.log(event);
//   mainTitle.classList.toggle("spectacular");
// });
