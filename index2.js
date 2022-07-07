const {nextISSTimesForMyLocation} = require('./iss_promised');

const printPassOverTimes = function(passTimes) {
  for (const i of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(i.risetime);
    const duration = i.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassOverTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });