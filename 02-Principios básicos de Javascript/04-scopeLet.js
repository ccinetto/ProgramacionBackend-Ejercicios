function explainLet() {
  let a = 10;
  console.log(a);
  if (true) {
    let a = 20;
    console.log(a);
  }
  console.log(a);
}

explainLet();

function explainHoistingLet() {
  let a = 20; //Probar comentando y descomentando esta linea
  console.log(a);
  a = 10;
  console.log(a);
  console.log(a);
}

explainHoistingLet();
