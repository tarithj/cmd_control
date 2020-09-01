function check (from, to, number) {
  for (let i = from; i !== to; i++) {
    if (number === i) {
      return true
    }
  }
  return false
}
module.exports = { check }
