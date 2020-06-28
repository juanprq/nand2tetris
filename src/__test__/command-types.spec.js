const commandTypes = require('../command-types');

describe('command-types', () => {
  test('it should have arithmetic command type', () => {
    expect(commandTypes.C_ARITHMETIC).toBeDefined();
    expect(commandTypes.C_ARITHMETIC).toEqual('C_ARITHMETIC');
  });

  test('it should have push command type', () => {
    expect(commandTypes.C_PUSH).toBeDefined();
    expect(commandTypes.C_PUSH).toEqual('C_PUSH');
  });

  test('it should have pop command type', () => {
    expect(commandTypes.C_POP).toBeDefined();
    expect(commandTypes.C_POP).toEqual('C_POP');
  });

  test('it should have label command type', () => {
    expect(commandTypes.C_LABEL).toBeDefined();
    expect(commandTypes.C_LABEL).toEqual('C_LABEL');
  });

  test('it should have goto command type', () => {
    expect(commandTypes.C_GOTO).toBeDefined();
    expect(commandTypes.C_GOTO).toEqual('C_GOTO');
  });

  test('it should have if command type', () => {
    expect(commandTypes.C_IF).toBeDefined();
    expect(commandTypes.C_IF).toEqual('C_IF');
  });

  test('it should have function command type', () => {
    expect(commandTypes.C_FUNCTION).toBeDefined();
    expect(commandTypes.C_FUNCTION).toEqual('C_FUNCTION');
  });

  test('it should have return command type', () => {
    expect(commandTypes.C_RETURN).toBeDefined();
    expect(commandTypes.C_RETURN).toEqual('C_RETURN');
  });

  test('it should have call command type', () => {
    expect(commandTypes.C_CALL).toBeDefined();
    expect(commandTypes.C_CALL).toEqual('C_CALL');
  });
});
