const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const idAnimal = data.employees.find((element) => element.id === id)
    .responsibleFor[0];
  const procuraIdAnimal = data.species.find((element) => element.id === idAnimal);
  return Object.values(procuraIdAnimal.residents
    .reduce((acc, curr) => (acc.age > curr.age ? acc : curr)));
}
module.exports = getOldestFromFirstSpecies;
// 1 Encontrar funcionário
// 2 Segundo, encontrar a prieira espécie que ele cuída
// 3 Procurar a espécie pelo Id
// 4 Todos os moradores daquela espécie e comprar qual é o mais velho
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
