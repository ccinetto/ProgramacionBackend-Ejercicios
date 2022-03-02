function explainScopeLet() {
  let a = 10;
  console.log(a);
  if (true) {
    let a = 20;
    console.log(a);
  }
  console.log(a);
}

explainScopeLet();

// function foo() {
//   if(true){
//     let i = 1;
//   }

//   console.log(i);
// }

// foo();
