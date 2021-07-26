/*1. Create an object that represents your favourite coffee. Please include coffee name,
strength, flavour, milk, sugar, … everything you like!*/
var coffee = {
    name: "moka",
    flavour: "orange",
    milk: "a lot of milk",
    sugar: "without sugar",
    strength: "strong"
};

/*2. Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity.*/
var movie = {
    title: "Mamma Mia",
    actors: "Meryl Streep, Pierce Brosnan",
    director: {
        name: "Phyllda",
        lastName: "Lioyd",
    },
    genre: "musical",
    popularity: "7.8 imbd"
};
console.log(movie.director.name);
/*3. Write a function that creates an object that represents a project.Each project is
described by: description, programming language, git repository, boolean status that
says if the project is in development or not.Add a method that prints out the project & #39;s 
repository, a method that checks if the project is written in JavaScript as well as a
method that checks if the project is in development or not.*/
function createProject(desc, lang, url, dev) {
    var project = {
        description: desc,
        language: lang,
        gitURL: url,
        isInDev: dev,
        printRepository: function() {
            console.log("url");
        },
        isJS: function() {
            return lang === "JavaScript";
        },
        isDevelopment: function() {
            return dev ? "project is in DEV" : "project is not in DEV";
        },
    };
    return project;
}
calculator = createProject(
    "program that calculates numbers",
    "JavaScript",
    "https://github.com",
    true
);
console.log(calculator);
console.log(calculator.isInDev);
/*4. Write a function that creates an object that represents a culinary recipe. Each recipe is
described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction.
○ Add a method that prints out all the ingredients necessary for the meal preparation.
○ Add a method that checks if a meal can be prepared for 15 minutes.
○ Add a method that changes the type of cuisine to the given value.
○ Add a method that delete a given ingredient from the list of ingredients.*/
function createRecepie(nam, cui, comp, ing, prepTime, prepInst) {
    var recepie = {
        name: nam,
        cuisine: cui,
        complexity: comp,
        ingredients: ing,
        preparatingTime: prepTime,
        preparatingInstruction: prepInst,
        printing: function() {
            return ing;
        },
        checkTime: function() {
            if (prepTime <= 15) {
                return "can be made for 15 minutes";
            } else {
                return "can\'t be made for 15 minutes";
            }
        },
    };
    return recepie;
}

var sarma = createRecepie("sarma",
    "domaca", "easy", ["meso", "kupus", "zacini"], 30, "uzmite...");
console.log(sarma);
console.log(sarma.printing());
console.log(sarma.checkTime());
var value = "kupus";
var filteredSarma = sarma.ingredients.filter(function(item) {
    return item !== value;
});
console.log(filteredSarma);
////////
function Recepie(nam, cui, comp, ing, prepTime, prepInst) {
    this.name = nam;
    this.cuisine = cui;
    this.complexity = comp;
    this.ingredients = ing;
    this.preparingTime = prepTime;
    this.preparingInstruction = prepInst;
    this.printing = function() {
        console.log(this.ingredients);
    };
    this.checkTime = function() {
        return this.preparatingTime <= 15;

    };
    this.changeTypeOfCusine = function(newType) {
        this.cuisine = newType;
    };
    this.delete
    var sarma = Recepie("sarma",
        "domaca", "easy", ["meso", "kupus", "zacini"], 30, "uzmite...");
    console.log(sarma);
    printing.changeTypeOfCusine;
    //console.log(sarma.printing());
    //console.log(sarma.checkTime());
    var value = "kupus";
    var filteredSarma = sarma.ingredients.filter(function(item) {
        return item !== value;
    });
    console.log(filteredSarma);