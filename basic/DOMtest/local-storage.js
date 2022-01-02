// //local storage
localStorage.setItem("todo", "feed the cat");
localStorage.setItem("aaa", "bbb");
// //Session storage
// sessionStorage.setItem("todolist", "session feed the cat!");

//getting stuff back
const user = localStorage.getItem("todo");

console.log(user);

//localStorage.clear();

//const todoList = ["feed the cat", "wash", "listen to some music"];

const todoList = {
  todo1: "feed the cat",
  todo2: "wash",
  todo3: "listen to some music",
};

//localStorage.setItem("todos", todoList);

localStorage.setItem("todos", JSON.stringify(todoList));

//const retrieved = localStorage.getItem("todos");

const retrieved = JSON.parse(localStorage.getItem("todos"));

console.log(retrieved);

// for (item of retrieved) {
//   console.log(item);
// }
