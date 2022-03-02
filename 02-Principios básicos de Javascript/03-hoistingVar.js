// function explainVar() {
//   var a;
//   a = 10;
//   console.log(a);
//   if (true) {
//     var a = 20;
//     console.log(a);
//   }
//   console.log(a);
// }

// explainVar();

function explainHoisting() {
  console.log(a);
  a = 10;
  console.log(a);
  a = 20;
  console.log(a);
  var a;
}

explainHoisting();
