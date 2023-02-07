import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'process';
import { printState, printError, printShape } from './printer.js';

export default class Console {
  constructor(factory) {
    this.factory = factory;
    this.rl = readline.createInterface({ input, output, terminal: false });
  }

  onConsole() {
    printState('on');

    this.rl.setPrompt('>> ');
    this.rl.prompt();

    this.rl.on('line', (input) => {
      const userInput = input.trim();
      this.isQuit(userInput) && this.offConsole();

      try {
        const shape = this.factory.run(userInput);
        printShape(shape);
      } catch (error) {
        printError(error.message);
      }
      this.rl.prompt();
    });

    this.rl.on('close', () => process.exit());
  }

  offConsole() {
    printState('off');
    this.rl.close();
  }

  isQuit(input) {
    if (input === 'quit') return true;
  }
}
