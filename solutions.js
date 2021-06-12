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
  let newCat = cat
}

const arrayOfCats = []
for(let i = 0; i < 6 ; i++) {
  arrayOfCats.push(i);
  console.log(arrayOfCats);

}
console.log(arrayOfCats[3]);

const catPerson = {
cats: ['cat1', 'cat2', 'cat3']
}
