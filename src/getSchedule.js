const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

// Ajuda do pessoal pra resolver o requisito 9 no discord + informações do slack
// Douglas Santos, Lucas Augusto, Guilherme Santos
// Questão mais complexa até o momento
const diasDaSemana = Object.keys(hours);

const zoologicoGeral = () => {
  const obj = diasDaSemana.reduce((acc, curr) => {
    acc[curr] = {
      officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm`,
      exhibition: species.filter((animal) => animal.availability.includes(curr)).map((a) => a.name),
    };
    return acc;
  }, {});
  obj.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return obj;
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (scheduleTarget === undefined) {
    return zoologicoGeral();
  }
  const verificacao = species
    .some((element) => scheduleTarget === element.name);
  if (!verificacao && !diasDaSemana.includes(scheduleTarget)) {
    return zoologicoGeral();
  }
  if (diasDaSemana.includes(scheduleTarget)) {
    return { [scheduleTarget]: zoologicoGeral()[scheduleTarget] };
  }
  return species.find((element) => element.name === scheduleTarget).availability;
}
module.exports = getSchedule;
