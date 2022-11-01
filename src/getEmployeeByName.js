const data = require('../data/zoo_data');

// return data.employees.find((primeiroNome) => primeiroNome.firstName);
function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((element) => element.firstName === employeeName
  || element.lastName === employeeName);
}

module.exports = getEmployeeByName;
