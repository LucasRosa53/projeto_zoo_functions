const data = require('../data/zoo_data');

// const arrayVazio = [];
// seu código aqui
// if (getSpeciesByIds !== ids) {
//   return arrayVazio;
// }
function getSpeciesByIds(...ids) {
  return ids.map((novoData) => data.species.find((element) => element.id === novoData));
}
console.log(data);

module.exports = getSpeciesByIds;
