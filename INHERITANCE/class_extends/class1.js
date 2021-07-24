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
class App {
    constructor(name, licence, stars) {
        this.name = name;
        this.licence = licence;
        this.stars = stars;
    }
    isCCLicence() {
        var lic = this.licence;
        if (lic.includes('CC')) {
            return 'the licence of the application is CC'
        } else {
            return 'the licence of the application is not CC'
        }

    }
    like() {
        this.stars += 1;
    }
    showStars() {
        console.log(this.stars);
    }
}
class WebApp extends App {
    constructor(name, licence, stars, url, technologies) {
        super(name, licence, stars)
        this.url = url;
        this.technologies = technologies;
    }
    getData() {
        console.log(this.name + ' ' + this.licence + ' ' + this.stars + ' ' + this.url + ' ' + this.technologies);
    }
    isReact() {
        var teh = this.technologies;
        if (teh === 'React') {
            return teh;
        } else {
            return 'Used technologies is not react'
        }
    }
}

class MobApp extends App {
    constructor(name, platforms, licence, stars) {
        super(name, licence, stars)
        this.platforms = platforms;
    }
    getData() {
        console.log(this.name + ' ' + this.licence + ' ' + this.stars + ' ' + this.platforms);
    }
    forAndroid() {
        return this.platforms.toLowerCase().includes('android')

    }
}
var viber = new MobApp('viber', 'android', 'CC', 5);
viber.getData();
console.log(viber.isCCLicence());

viber.showStars();
viber.like();
viber.showStars();
console.log(viber.forAndroid());
console.log(viber);