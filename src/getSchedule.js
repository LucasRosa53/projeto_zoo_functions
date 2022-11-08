const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (scheduleTarget) {
    return data.species.find((element) => element.availability);
  }
}

module.exports = getSchedule;
