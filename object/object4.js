// object4.js;
//prototype, to reduce the memory consumption, or separate the data and logic
function Todo(name, completed) {
  this.name = name;
  this.completed = completed;
  this.getTodoName = function () {
    console.log(this.name);
  };
  this.checkCompleted = function () {
    console.log(this.completed);
  };
  this.deleteTodo = function () {
    console.log("deleted");
  };
}

const todo = new Todo("egg", false);
const todo2 = new Todo("milk", true);
//copying all functions in each instance
console.log(todo, todo2);
//be false
console.log(todo.getTodoName === todo2.getTodoName);

// prototype
function ProtToDo(name, completed) {
  this.name = name;
  this.completed = completed;
}
ProtToDo.prototype.getTodoName = function () {
  console.log(this.name);
};

const protTodo = new ProtToDo("egg", false);
const protTodo2 = new ProtToDo("milk", true);
//copying all functions in each instance
console.log(protTodo, protTodo2);
//be true! not copied
console.log(protTodo.getTodoName === protTodo2.getTodoName);

const strA = new String("aaa");
console.log(strA);
console.log(typeof strA); //String Object
const strB = "bbb";
console.log(strB);
console.log(typeof strB); //String
