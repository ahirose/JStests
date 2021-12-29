//this

console.log(this);

console.log(this.alert.name);
aaa();
//user.sayHi();

function aaa() {
  console.log(this);
}

//this -> refers to an object
const user = {
  name: "usr",
  sayHi() {
    console.log(this.name);
  },
};
user.sayHi();

const admin = {
  name: "admin1",
  sayHi() {
    console.log(this.name);
  },
};
admin.sayHi();

function sayNameWithUpperCase() {
  console.log(this.name.toUpperCase());
}

user.hi = sayNameWithUpperCase;
admin.hi = sayNameWithUpperCase;

//using the object scope
user.hi();
admin.hi();

//-------
//const lists = document.querySelectorAll("li");

const lists = document.querySelectorAll("li");
console.log(lists.length);
lists.forEach((li) => {
  li.addEventListener("click", function () {
    console.log(this);
  });
});

//method and functions
const user01 = {
  name: "usr01",
  videos: ["html", "fcss", "js", "react"],
  greet() {
    //work well with "this"
    console.log(`Hello there ${this.name}`);
    console.log(`You currently have ${this.videos.length} videos`);

    this.videos.forEach(function () {
      console.log(this); //get window
    });

    this.videos.forEach(() => {
      console.log(this); //get object
    });

    //put this on the parameter
    const self = this;
    const getSelfVideos = function () {
      //these "self" are working.
      console.log(`Hello there ${self.name}`);
      console.log(`You currently have ${self.videos.length} videos`);
    };
    getSelfVideos();

    //or use Arrow function
    const getArrowVideos = () => {
      //these "this" are not working. no 'this'
      console.log(`Hello there ${this.name}`);
      console.log(`You currently have ${this.videos.length} videos`);
    };
    getArrowVideos();

    //this will be an error with undefined "this"
    const getVideos = function () {
      console.log(`Hello there ${this.name}`);
      console.log(`You currently have ${this.videos.length} videos`);
    };
    getVideos();
  },
};
user01.greet();
