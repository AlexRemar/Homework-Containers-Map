export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [123, 'Eval error'],
      [124, 'Range error'],
      [125, 'Reference error'],
      [126, 'Syntax error'],
      [127, 'Type error'],
    ]);
  }

  translate(code) {
    if (!this.errors.has(code)) {
      throw new Error('Unknown error');
    } else {
      return this.errors.get(code);
    }
  }
}
