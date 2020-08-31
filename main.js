const { argv } = require('yargs')
const command = argv.command
const commandArgv = argv.commandArgv || null
console.log(commandArgv)
const till = argv.commandTill * 1000 || null
let killSignal = argv.killSignal

if (command === undefined) {
  console.error('command argv is undefined')
  process.exit(1)
}
if (killSignal === undefined) {
  killSignal = 'SIGINT'
}

const spawn = require('cross-spawn')

let commandRun
if (commandArgv === null) {
  commandRun = spawn(command, [], { env: process.env, cwd: __dirname, stdin: process.stdin })
  stdListen()
} else {
  commandRun = spawn(command, [commandArgv], { env: process.env, cwd: __dirname, stdin: process.stdin })
  stdListen()
}

function stdListen () {
  commandRun.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`)
  })
  process.stdin.pipe(commandRun.stdin)
  commandRun.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`)
  })
  commandRun.on('close', (code) => {
    console.log(`child process exited with code ${code}`)
    process.exit(code)
  })
}

if (till !== null) {
  setTimeout(function () {
    command.kill(killSignal)
  }, till)
}
