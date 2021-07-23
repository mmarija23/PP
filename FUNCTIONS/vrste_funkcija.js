//*Inner(private) function -> f-ja koja je kreirana u nekoj drugoj f-ji.
function outer(b) {
    function inner(a) {
        return a;
    }
    return b;
}

//*Anonymous function-> f-ja bez imena
//anonimna fja
function(a) {
    return a;
}
//moze biti dodeljena varijabli
var anonymous = function(a) {
    return a;
}

//*IIFE(Immediately Invoked Function Expression), Self-Invoking->samopozivajuca f-ja
(function(a) {
    return a;
})()

//*Callback->f-ja prosledjena drugoj f-ji kao argument
//prethodno definisana callBack f-ja
function CallBack(a) {
    return a;
}

function whichIsCallingCallBack(callBack);

//callBack f-ja definisana prilikom poziva f-je koja prima callBack f-ju kao argument
whichIsCallingCallBack(function(b) {
    return b;
});

//*Constructor-> f-ja koja vraca (instancira) objekat (svoju instancu)
function Cat(name) {
    this.name = name;
}

//*Instanca- objekat koji je kreirala konstruktor f-ja je instanca te konstruktor f-je
var catInstance = new Cat('Garfield');