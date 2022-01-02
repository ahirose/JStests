const videos = ["aaaa", "html tutorial", "ccccc"];

videos.push("css tutorial");

// //console.log(videos);

// videos.forEach(function (video) {
//   console.log(video);
// });

//higher order function example
function repeater(fn) {
  fn();
  fn();
  fn();
}

// function sayHello() {
//   console.log("hello there");
// }
// repeater(sayHello);

repeater(
  //call back function example
  function () {
    console.log("yeyy");
  }
);

//MAP makes a copy of value, not the reference
const newVideos = videos.map(function (video) {
  return video;
});

const newCopiedVideos = videos;

newVideos.push("HEYY");
newCopiedVideos.push("YOOOO");

console.log("newVideos=" + newVideos);
//the original is modified by copied one, not mapped one
console.log("videos=" + videos);

//FIND
const searchTutorial = videos.find(function (video) {
  return video.includes("tutorial");
});
//show the first tutorial
console.log(`tutorial: ${searchTutorial}`);

//FILTER
const shortSearch = videos.filter(function (video) {
  //return video.length < 10;
  return video.includes("tutorial");
});
console.log("shortSearch: " + shortSearch);

const games = [
  { title: "Mass Effect", rating: 9.5 },
  { title: "League of Legends", rating: 8.4 },
  { title: "Last of Us", rating: 7.3 },
  { title: "God of war", rating: 6.2 },
  { title: "WWE 2k20", rating: 5.1 },
];

//console.log(games[1].title);

const highRatingGames = games.filter(function (game) {
  return game.rating > 8;
});
console.log("highRatingGames: " + highRatingGames);

highRatingGames.forEach(function (game) {
  console.log(game.title);
});

//some , every
//const checkRating = games.some(function (game) {
const checkRating = games.every(function (game) {
  return game.rating > 7;
});
console.log("checkRating:" + checkRating);

//MAP example
const newVideos2 = videos.map(function (video) {
  return video.length < 10 ? video : "長すぎ";
});

console.log("newVideos2: " + newVideos2);

//arrow function
const arrowNewVideo = videos.map((video) => {
  return video.length < 10 ? video : "長い";
});
console.log("arrowNewVideo: " + arrowNewVideo);

//arrow function one liner, no bracket, return and colon
const arrowNewVideo2 = videos.map((video) =>
  video.length < 10 ? video : "長い"
);
console.log("arrowNewVideo2: " + arrowNewVideo2);

//SORT, modify the parameter itself
const items = ["banana", "orange", "apple", "mango"];
const ratings = [92, 56, 4, 2, 22, 45.6, 10, 80];
// const ratings = [1, 99, 89, 22, 63, 3, 1];

//sort as alphabets order
// ratings.sort();
// console.log(ratings);

//sort as number
//one liner
//ratings.sort((a, b) => a - b);

// ratings.sort(function (a, b) {
//   console.log(`a_b= ${a}_${b}`);
// });
// //ratings.sort();
// console.log(ratings);

ratings.sort(function (a, b) {
  console.log(`a_b= ${a}_${b}`);
  return a - b;
});

//99 1 2 6
//1 99 2 6
//1 2 99 6
//1 2 99 6
//1 2 6 99
//1 2 6 99

console.log(ratings);

//sort by games' rating
games.sort((a, b) => -a.rating + b.rating);
console.log(games);

// -------
const ratings01 = [92, 56, 4, 2, 22, 45.6, 10, 80];
//copy the object values
const desRating = [...ratings01];
desRating.sort((a, b) => a - b);
console.log(desRating);
const ascRating = [...ratings01];
ascRating.sort((a, b) => b - a);
console.log(ascRating);
console.log(ratings01);
