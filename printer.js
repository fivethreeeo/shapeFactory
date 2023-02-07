const printState = state => {
  if (state === 'on') {
    console.log(
      '\n* Launch the console. Please enter your coordinates.\n< Input Format >\nEX) (9,0)-(1,12)-(24,1)\n(2 <= coordinates <= 5) && (0 <= value <= 24)\n'
    );
    return;
  }
  if (state === 'off') {
    console.log(`\n* Close the console.\n`);
    return;
  }
};

const printError = error => {
  if (error === 'format') {
    console.log('Error: Format or Value of coordinates you entered is incorrect.');
    return;
  }
  if (error === 'one points') {
    console.log(`Error: Coordinates should be at least 2.`);
    return;
  }
  if (error === 'over points') {
    console.log(`Error: Coordinates should be at most 5.`);
    return;
  }
};

const printShape = shape => {
  console.log(`${shape.valueName} : ${shape.value}`);
};

export { printState, printError, printShape };
