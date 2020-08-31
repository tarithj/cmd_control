const { argv } = require('yargs')
const command = argv.command
let commandArgv = argv.commandArgv
const till = argv.commandTill * 1000
let killSignal = argv.killSignal

if (command === undefined) {
  console.error('command argv is undefined')
  process.exit(1)
}
if (commandArgv === undefined) {
  commandArgv = 0
}
if (killSignal === undefined) {
  killSignal = 'SIGINT'
}

const spawn = require('cross-spawn')
const ls = spawn(command, [commandArgv], { env: process.env, cwd: __dirname, stdin: process.stdin })

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`)
})
process.stdin.pipe(ls.stdin)

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`)
})

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`)
  process.exit(code)
})

setTimeout(function () {
  ls.kill(killSignal)
}, till)
