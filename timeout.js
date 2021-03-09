/* Timeout can function callback
* Expectation:
task arg: 1
timeout executing: 1
task arg: 2
timeout executing: 2
task arg: 3
timeout executing: 3
task arg: 4
timeout executing: 4
*/

function task(arg, callback) {
  console.log(`task arg: ${arg}`)
  setTimeout(() => {
    console.log(`timeout executing: ${arg}`)
    callback(arg)
  }, 1000)
}

function final(arg) {
  console.log(`final arg: ${arg}`)
}

task(1, function(value) {
  task(2, function(value) {
    task(3, function(value) {
      task(4, final)
    })
  })
})

