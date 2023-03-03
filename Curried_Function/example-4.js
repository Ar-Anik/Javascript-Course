function log(date, importance, message) {
  console.log(
    `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} : ${importance} : ${message}`
  );
}

let _ = require("lodash");
let curriedLog = _.curry(log);

curriedLog(new Date(), "DEBUG", "from usa");
curriedLog(new Date())("Error")("from bd");

let logNow = curriedLog(new Date());
logNow("Wraning", "from ukn");
