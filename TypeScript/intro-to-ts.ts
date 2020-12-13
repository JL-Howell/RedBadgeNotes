//DATATYPES

let library: string = 'React';
let age: number = 309;
let snowy: boolean = false;
let instructors: string[] = ['Stringleborg', 'Taylord', 'Ro-I-Put-Ice-Cream-In-The-Pantry', 'Weewoo', 'Jesse_unmute'];

let numbers: Array<number> = [1, 2, 3, 4, 5];
let newNumbers: number[] = [1, 2, 3, 4, 5];

// FUNCTIONS
function multiNums(numOne, numTwo) {
    return numOne * numTwo;
}

console.log(multiNums(2, 3));

//CLASSES
class Character {
    name: string;
    talent: string;

    constructor(name: string, talent: string) {
        this.name = name;
        this.talent = talent;

    }

    greet() {
        return `Hi, my name is ${this.name}!`
    }
}

let harry: Character = new Character('Harry Potter', 'Living');
console.log(harry);
// harry.name = 'Harry Potter';
// harry.talent = 'Living';

//INTERFACES
//interces become useful when you use scale.

interface Villain {
    name: string;
    plot: string;

    scheme(): string;
}

class HeWhoMustNotBeNamed implements Villain {
    name: string;
    plot: string;

    constructor(name: string, plot: string) {
        this.name = name;
        this.plot = plot;
    }

    scheme() {
        return `I am ${this.name} and I want to ${this.plot}!`
    }
}

let darkLord = new HeWhoMustNotBeNamed('Tom Marvolo Riddle', 'take over the world');
darkLord.scheme();


