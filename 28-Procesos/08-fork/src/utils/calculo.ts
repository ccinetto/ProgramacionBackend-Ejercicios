export const calculo = (): number => {
  let sum = 0;
  for (let i = 0; i < 6e9; i++) {
    sum += i;
  }
  return sum;
};

process.on('message', (msg) => {
  if (msg == 'start') {
    console.log('Start calculo');
    const sum = calculo();

    if (process && process.send) {
      process.send(sum);
    }
  }
});
