// for (let i = 0; i <= 100; i++) {
//   console.log(i);
//   if (i === 50) {
//     console.log("50だ");
//     break;
//   }
// }

// const text = "deved";

// for (let i = 0; i < text.length; i++) {
//   console.log(i);
// }

const names = ["dev ed", "Barbie", "logic", "MF doom", "gtoot"];

// for (let name of names) {
//   console.log(names.indexOf(name));
// }

// names.forEach(function (item, index) {
//   if (item === "logic") {
//     console.log(item, index);
//     console.log("stopped");
//     // can't break;
//   }
//   console.log("aaa" + item);
// });

const user = {
  name: "dev ed",
  age: 25,
  subscribers: 200,
  money: "rich",
};

for (let x in user) {
  console.log(x + "=" + user[x]);
}

let i = 0;
// while (i < 30) {
//   console.log(i);
//   i += 3;
// }

do {
  console.log(i);
  i++;
} while (i < 10);
