// const items = document.getElementsByClassName("item");
// const nodeItems = document.querySelectorAll(".item");

// console.log(items);
// console.log(nodeItems);

// // for (item of items) {
// //   console.log(item);
// // }

// nodeItems.forEach(function (item) {
//   console.log(item);
// });

//get Element returns HTML collection, its dynamic
// const collectionItems = document.getElementsByClassName("item");
// const todoList = document.getElementById("todo-list");
// const todoNr = document.getElementsByClassName("todo-nr")[0];

//query selector returns NodeList, it's static
const todoList = document.querySelector("#todo-list");
const collectionItems = document.querySelectorAll(".item");
const items = todoList.children; // this will return the HTML collection
const todoNr = document.querySelector(".todo-nr");

const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "item3";
todoList.appendChild(newItem);

const newItem2 = document.createElement("li");
newItem2.classList.add("item");
newItem2.innerText = "item3";
todoList.appendChild(newItem2);

// todoNr.innerText = collectionItems.length; // will return the static value, 2
todoNr.innerText = items.length; // will return the dynamic value, 4

const collectionItems2 = document.querySelectorAll(".item");

console.log(collectionItems);
console.log(collectionItems2);
console.log(items);
