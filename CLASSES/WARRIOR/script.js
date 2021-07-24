//superclass
class Human {
    constructor(weapon) {
        this.weapon = weapon;
        this.health = 100;
    }
    attack() {
        console.log("Swings " + this.weapon);
    }
}

//subclass-has the same properties as its superclass
class Warrior extends Human {
    constructor(weapon, warCry) {
        super(weapon); //super () method to call the constructor of the superclass
        this.warCry = warCry; //we can make the Warrior subclass more specific by adding properties to it
    }

    //method that use these properties;with the custimized attack() method, every new Warrior instance we create can have their own war cry
    attack() {
        super.attack();
        console.log(this.warCry);
    }
}
var human = new Human("axe");
human.attack();
var warrior = new
Warrior("sword", "Barritus!");
console.log(warrior.weapon);
console.log(warrior.warCry);
warrior.attack();
var alexander = new Warrior("sword", "Alala!");
var leonidas = new
Warrior("spear", "Molon labe!");
alexander.attack;
leonidas.attack;