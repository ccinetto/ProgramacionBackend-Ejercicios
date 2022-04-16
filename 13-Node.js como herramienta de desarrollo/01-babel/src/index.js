import Color from './colors';

for (let i = 0; i < 200; i++) {
  const miColor = new Color();
  console.log(`pedido ${i}: ${JSON.stringify(miColor.color)}`);
}
