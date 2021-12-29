//bind, call, apply

const person = {
  firstName: "Ed",
  lastName: "Dev",
  getName() {
    console.log(this.firstName + this.lastName);
    // function aaa() {
    //   console.log(this.firstName); // undefined
    // }
    // aaa();
  },
};

person.getName();

function registerUser() {
  console.log(this);
}

// this refers window
registerUser();

const register = registerUser;

// this refers function registerUser
console.log(register);

//we can't call it without bind
function registerUser2(country, lang) {
  this.getName();
  console.log(country + " " + lang);
}

//bind registerUser2 to person
const registerBind = registerUser2.bind(person);
registerBind("Japan", "jp");

//can't use it without bind
//registerUser2(); //TypeError, not a function
//call
registerUser2.call(person, "China", "cn");
//apply
registerUser2.apply(person, ["Korea", "kr"]);
