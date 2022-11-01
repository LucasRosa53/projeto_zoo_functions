const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui // Conteúdo retirado https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#exemplos / apresentado a doc pelo "Lucas Augusto"
  return data.employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // Ajuda mentoria vitor para resolução
  if (isManager(managerId)) {
    return data.employees.filter((element) => element.managers.includes(managerId))
      .map((element) => (`${element.firstName} ${element.lastName}`));
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
