class Cat {
constructor(name) {
  this.name = name;
}
fight(otherCat) {
  console.log('Fighting' + this.name)
}
}

const garfield = new Cat('Garfield');
const sylvester = new Cat('Sylvester')

console.log(garfield);
console.log(sylvester);

console.log(garfield.fight());
console.log(sylvester.fight());

const catFunction = function (cat) {
  console.log('hello ' + cat)
}

catFunction('cat 3');

const arrayOfCats = []
for(let i = 0; i < 6 ; i++) {
  arrayOfCats.push(i);
  console.log(arrayOfCats);

}
console.log(arrayOfCats[3]);

const catPerson = {
cats: ['cat1', 'cat2', 'cat3']
}

class Pirate {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }

  greeting() {
    console.log('Hello there')
  }
  fighting() {
    console.log('not friends anymore')
  }
  break() {
    console.log('taking a break now')
  }
}
