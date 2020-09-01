const { argv } = require('yargs')
const spawn = require('cross-spawn')
const splash = require('./splash/display_splash')
let commandRun

const command = argv.command
const commandArgv = argv.commandArgv || null
const till = argv.commandTill * 1000 || null
let killSignal = argv.killSignal

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

function check () {
  if (command === undefined) {
    console.error('command argv is undefined')
    process.exit(1)
  } else {
    command.replace('~s', ' ')
    if (killSignal === undefined) {
      killSignal = 'SIGINT'
    }
    preStart()
  }
}
function preStart () {
  splash.displaySplash(function () {
    setTimeout(function () {
      if (commandArgv === null) {
        commandRun = spawn(command, [], { env: process.env, stdin: process.stdin, shell: true })
        stdListen()
      } else {
        commandRun = spawn(command, [commandArgv], { env: process.env, stdin: process.stdin, shell: true })
        stdListen()
      }
    }, 1000)
  })
}
check()
