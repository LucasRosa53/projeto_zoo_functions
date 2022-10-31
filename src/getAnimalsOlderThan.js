const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species.find((element) => element.name === animal)
    .residents.every((idadeMinima) => idadeMinima.age >= age);
}
console.log(data);
module.exports = getAnimalsOlderThan;
