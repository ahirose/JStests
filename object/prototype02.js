function Enemy(life, name, level) {
  this.life = life;
  this.name = name;
  this.level = level;
}

Enemy.prototype.getInfo = function () {
  console.log(this.life, this.name, this.level);
};

Enemy.prototype.attack = function () {
  console.log(`${this.name} has attacked!`);
};

Enemy.prototype.block = function () {
  console.log(`${this.name} has blocked`);
};

function Dragon(life, name, level, color, spell) {
  //to inherit the Enemy object
  //"this" is going reference the Dragon object
  Enemy.call(this, life, name, level);
  //define it as normal
  this.color = color;
  this.spell = spell;
}
//inherit prototype
Dragon.prototype = Object.create(Enemy.prototype);

//Add prototype for Dragon
Dragon.prototype.fireBreath = function () {
  console.log("FIRE BREATHH!");
};

const newDragon = new Dragon(100, "drgn", 25, "green", "fire");

console.log(newDragon);
//inherited prototype
newDragon.getInfo();
