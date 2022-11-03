const data = require('../data/zoo_data');

const { species } = data;
function countAnimals(animal) {
  // seu código aqui
  // AJUDA DE MENTORIA COM O VITOR
  if (!animal) {
    const objectVazio = {};
    species.forEach((element) => {
      objectVazio[element.name] = element.residents.length;
    });
    return objectVazio;
  }
  if (animal.sex) {
    return species.find((element) => element.name === animal.specie)
      .residents.filter((element) => element.sex === animal.sex).length;
  }
  return species.find((element) => element.name === animal.specie)
    .residents.length;
}
console.log(countAnimals({ specie: 'elephants', sex: 'male' }));
module.exports = countAnimals;
