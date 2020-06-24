const commandTypes = require('./command-types');

class Parser {
  currentPosition = 0;

  constructor(vmCode) {
    this.vmCode = vmCode;
  }

  hasMoreCommands() {
    // This will return if the code has more commands.
    return true;
  }

  advance() {
    // this will advance the current position.
    // this should not be called if the hasMoreCommands is false.
  }

  getCommandType() {
    // this will return the type of command from a defined constant file.
    // for now this will only return (C_ARITHMETIC, C_PUSH or C_POP).
    return commandTypes.C_ARITHMETIC;
  }

  getArg1() {
    // return the argument 1 of the vm current command
  }

  getArg2() {
    // return the argument 2 of the vm current command
  }
}
