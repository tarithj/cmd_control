const splashTexts = require('./splash_texts')
const fromTo = require('../util/from_to')
function displaySplash (cb) {
  let month = new Date()
  month = month.getMonth() + 1
  if (fromTo.check(1, 5, month)) {
    console.log(splashTexts.blurred)
  } else if (fromTo.check(10, 11, month)) {
    console.log(splashTexts.halloweenSplash)
  } else {
    console.log(splashTexts.defaultSplash)
  }
  console.log('https://github.com/tarithj/cmd_control')
  cb()
}
module.exports = { displaySplash }
