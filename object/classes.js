//classes.js;

class Enemy {
  constructor(life, name, level) {
    this.life = life;
    this.name = name;
    this.level = level;
  }
  getInfo() {
    console.log(this.life, this.name, this.level);
  }
}

const turtle = new Enemy(25, "Squid", 100);
const tiger = new Enemy(45, "Cat", 200);

console.log(turtle);
console.log(tiger);
turtle.getInfo();
tiger.getInfo();
//not copied
console.log(turtle.getInfo === tiger.getInfo);

class Bug extends Enemy {
  constructor(life, name, level, legs, dmg) {
    super(life, name, level);
    this.legs = legs;
    this.dmg = dmg;
  }
}

const john = new Bug(10, "buggy", 1, 5, 100);

console.log(john);
john.getInfo();
