/*Applications:
1. Create constructor functions with properties representing the following:
○ WebApp: name, url, technologies, licence, stars
○ MobileApp: name, platforms, licence, stars
2. All web applications should inherit methods:
○ getData which prints out all the information
○ reactBased which checks if one of the used technologies is React
3. All mobile applications should inherit methods:
○ getData which prints out all the informations
○ forAndroid which checks if one of the platforms the application is developed for is
Android

4. Both web and mobile applications should inherit methods:
○ isCCLicence which checks if the licence of the application is CC (Creative
Commons)
○ like which increases the number of stars by one
○ showStars which prints out the number of stars*/


//App constructor f-on

function App(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;

}
App.prototype.isCCLicense = function() {
    var lic = this.licence;
    if (lic.includes('CC')) {
        return 'the licence of the application is CC'
    } else {
        return 'the licence of the application is not CC'
    }

}
App.prototype.like = function() {
    return this.stars += 1;
}

App.prototype.showStars = function() {
    console.log(this.stars);
}


//inheritance

function WebApp(name, url, technologies, licence, stars) {
    App.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
}
WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.getData = function() {
    return this.name + " " + this.url + " " + this.licence + ", " + this.stars;
}

WebApp.prototype.reactBased = function() {
    var teh = this.technologies;
    if (teh === 'React') {
        return teh;
    } else {
        return 'Used technologies is not react'
    }
}



function MobileApp(name, platforms, licence, stars) {
    App.call(this, name, licence, stars);
    this.platforms = platforms;
}
MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;


MobileApp.prototype.getData = function() {
    console.log(this.name + " " + this.platforms + " " + this.licence + ", " + this.stars);
}

MobileApp.prototype.forAndroid = function() {
    return this.platforms.toLowerCase().includes('android')

}


var viber = new MobileApp('viber', 'android', 'CC', 5);
viber.getData();
console.log(viber.isCCLicense());

viber.showStars();
viber.like();
viber.showStars();
console.log(viber.forAndroid());
console.log(viber);