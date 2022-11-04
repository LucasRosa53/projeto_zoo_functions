const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  return data.employees.find((element) => element.responsibleFor === id);
}

module.exports = getOldestFromFirstSpecies;
