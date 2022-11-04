const data = require('../data/zoo_data');

// const { prices } = data;

// const entrants = [
//   { name: name.findName(), age: 5 },
//   { name: name.findName(), age: 5 },
//   { name: name.findName(), age: 5 },
//   { name: name.findName(), age: 18 },
//   { name: name.findName(), age: 18 },
//   { name: name.findName(), age: 50 },
// ];

function countEntrants(entrants) {
  // seu código aqui
  const child = entrants.filter((element) => element.age < 18).length;
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50)
    .length;
  const senior = entrants.filter((element) => element.age >= 50)
    .length;

  return { child, adult, senior };
}
function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || {}) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);

  const entradaChild = child * data.prices.child;
  const entradaAdult = adult * data.prices.adult;
  const entradaSenior = senior * data.prices.senior;
  return entradaChild + entradaAdult + entradaSenior;
}
// console.log(calculateEntry(entrants));
module.exports = { calculateEntry, countEntrants };
// 1- Pegar o valor de child, adult e senior(Já na função countEntrants)
// 2- multiplicar o valor de entrada x o numero de  pessoas de acordo com a faixa etaria
// 3- Retornar a soma dessas mults
