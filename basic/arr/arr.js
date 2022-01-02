//you can modify "const" arr
const names = ["aaa", "bbb"];
names[1] = "ccc";
names.push("ddd");
console.log(names);

// //it makes error
// names = [];

//it copies a reference of arr, not the value
const newNames = names;

//add "FFF" on the new Names
newNames.push("FFF");
console.log(`newNames ${newNames}`);
//names also have "FFF"
console.log(`names ${names}`);

//how about the object?

const tweet = {
  name: "aaaaa",
  tweets: 20,
  age: 26,
};

const newTweet = tweet;
newTweet.tweets = 2020202;

//updated the original object
console.log(tweet);
