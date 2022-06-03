export const calculo = () => {
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

    process.send(sum);
  }
});
