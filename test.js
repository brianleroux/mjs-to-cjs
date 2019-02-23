let test = require('tape')
let plugin = require('./index.js')

test('env', t=> {
  t.plan(1)
  t.ok(plugin, 'default to preact')
})

test('can transpile jsx to preact h', t=> {
  t.plan(1)
  let src = `import foo from '/bar'
  let baz = name=> console.log(name)
  export default baz
  `
  let result = plugin(src)
  t.ok(result, 'got result')
  console.log(result)
})
