const commandTypes = require('./command-types');

/**
 * Parser class is in charge of the command parsing from a string that represents VM code.
 */
class Parser {
  currentPosition = 0;

  /**
   * Constructor function, initialize the parser object in order to start doing its job.
   *
   * @param {string} vmCode code that is going to be parsed.
  */
  constructor(vmCode) {
    this.vmCode = vmCode;
  }

  /**
   * it determines if the parser instance has more commands remaining.
   *
   * @return {boolean} if the parser objetc has more commands or not.
  */
  hasMoreCommands() {
    // This will return if the code has more commands.
    return true;
  }

  /**
   * advande to the next command in the sequence.
   *
  */
  advance() {
    // this will advance the current position.
    // this should not be called if the hasMoreCommands is false.
  }

  /**
   * returns the command type of the current command.
   *
   * @return {string} type of the current command.
   */
  getCommandType() {
    // this will return the type of command from a defined constant file.
    // for now this will only return (C_ARITHMETIC, C_PUSH or C_POP).
    return commandTypes.C_ARITHMETIC;
  }

  /**
   * returns the argument 1 of the command.
   *
   * @return {string} the argument 1 of the command, ej: 'add' or push <segement>
  */
  getArg1() {
    // return the argument 1 of the vm current command
  }

  /**
   * return the argument 2 of the command.
   *
   * @return {integer} the second argument of the command
  */
  getArg2() {
    // return the argument 2 of the vm current command
  }
}
