// const { fetchMyIP } = require('./iss');

// // const cb = function(error, desc) {
// //   if (error) {
// //     console.log('Error fetch details:', error);
// //   } else {
// //     console.log(desc);
// //   }
// // };

// // fetchMyIP(cb);

const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

// const IP = fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
//   return ip;
// });



// fetchCoordsByIP('172.218.140.104', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:' , coordinates);
// });

// const exampleCoords = { latitude: 48.7786908, longitude: -123.7079417 };

// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned flyover times:' , passTimes);
// });

const printPassOverTimes = function(passTimes) {
  for (const i of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(i.risetime);
    const duration = i.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  printPassOverTimes(passTimes);
});