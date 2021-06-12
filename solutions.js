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

const arrayOfCats = []
for(let i = 0; i < 5 ; i++) {
  arrayOfCats.push(i);
  console.log(arrayOfCats);

}
console.log(arrayOfCats[3]);
