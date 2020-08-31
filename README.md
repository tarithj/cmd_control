# CMD CONTROL
![GitHub release (latest by date)](https://img.shields.io/github/v/release/tarithj/cmd_control)
![GitHub commits since latest release (by date)](https://img.shields.io/github/commits-since/tarithj/cmd_control/latest/main)
[![CodeFactor](https://www.codefactor.io/repository/github/tarithj/cmd_control/badge/master)](https://www.codefactor.io/repository/github/tarithj/cmd_control/overview/master)

## About
CMD CONTROL is a WIP command scheduling and controlling software

## How to use
1. Download the latest release
2. Run the executable with the specific args
### args
* --command: The command you want to run (example: ``cmd_control-win-x64.exe --command=dir``)
* --commandArgv: The argv of the command (example: ``cmd_control-win-x64.exe --command=cd --commandArgv=..``)
* --commandTill: The max amount of time in seconds the command is allowed to run (example: ``cmd_control-win-x64.exe --command=pause --commandTill=10``)
* --killSignal: The kill signal that should be fired when the max amount of time is passed (example: ``cmd_control-win-x64.exe --command=abc.exe --commandTill=10 --killSignal=SIGINT``)
## How can I help ?
All kinds of contributions are welcome 🙌! The most basic way to show your support is to star 🌟 the project, or to raise issues 💬
