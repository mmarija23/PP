'use strict';

(function() {
    var CONTINETS = Object.freeze({
        ASIA: 'AS',
        EUROPA: 'EU',
        AFRICA: 'AF',
        SOUTHAMERICA: 'SA',
        NORTHAMERICA: 'NA',
        AUSTRALIA: 'AU'
    });

    function Country(name, odds, continent) {
        if (!name || !odds || !continent) {
            throw new Error('Fields name and odds are requaried')
        }
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }

    function Person(namePerson, surname, dateOfBirth) {
        if (!namePerson || !surname || !dateOfBirth) {
            throw new Error('Fields name, surname and dateOfBirth are required')
        }
        this.name = namePerson;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
    }

    function Player(namePerson, betAmount, nameCountry) {
        if (!namePerson || !betAmount) {
            throw new Error('Invalid person and batAmount input')
        }
        if (!nameCountry || !(nameCountry instanceof Country) || !betAmount) {
            throw new Error('Invalid country and betAmount input')
        }
        this.namePerson = namePerson;
        this.betAmount = betAmount;
        this.nameCountry = nameCountry;
    }

    function Address(country, city, postalCode, streetAndNumber) {
        if (!country || !city || !postalCode || !streetAndNumber) {
            throw new Error('Invalid country, city, postalCode and streetAndNumber')
        }
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.streetAndNumber = streetAndNumber;

    }

    function BettingPlace(address, listOfPlayers) {
        if (!address || !listOfPlayers) {
            throw new Error('Invalid address and listOfPlayers')
        }
        this.
    }
    //testing
    try {
        var country1 = new Country('Serbia', 2, CONTINETS.EUROPA)
        console.log(country1);
        var person1 = new Person('Pera', 'Peric', '02.11.1994')
        console.log(person1);
        var player1 = new Player('Marko', 1200, country1)
        console.log(player1);
        var address1 = new Address('Serbia', 'Belgrade', 11000, 'Resavska 43')
        console.log(address1);
    } catch (error) {
        console.log('Error message: ' + error.message);
    }
})()