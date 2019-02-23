let transform = require('sucrase').transform

module.exports = function toCJS(src) {
  return transform(src, {
    transforms: ['imports'],
    production: true
  }).code
}
