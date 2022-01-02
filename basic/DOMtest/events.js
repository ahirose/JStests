"use strict";

const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const todoNr = document.querySelector(".todo-nr b");
const mainTitle = document.querySelector(".main-title");
const items = todoList.children;

//todoNr.innerText = items.length;

//click, scroll, resizing the browser
//Attach an event listener

// button.addEventListener("click", function () {
//   const newItem = document.createElement("li");
//   newItem.classList.add("item");
//   newItem.innerText = `Item ${items.length + 1}`;
//   todoList.appendChild(newItem);
//   console.log(todoList);
//   todoNr.innerText = items.length;
// });

// document.addEventListener("keydown", function (event) {
//   console.log("key" + event);
// });

console.log(button);

//button.addEventListener("keydown", function (event) {
button.addEventListener("click", function (event) {
  //   mainTitle.style.color = "red";
  //   mainTitle.style.fontSize = "500px";
  //
  console.log(event);
  mainTitle.classList.toggle("spectacular");
});
