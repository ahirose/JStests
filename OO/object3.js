//Constructor function
function Todo(name, completed) {
  //   console.log(this);
  this.name = name;
  this.completed = completed;
  this.getTodoName = function () {
    console.log(this.name);
  };
}

const todo = new Todo("eggs", false);
//console.log(todo);
const todo2 = new Todo("milk", true);

console.log(todo, todo2);

todo.getTodoName();
todo2.getTodoName();
