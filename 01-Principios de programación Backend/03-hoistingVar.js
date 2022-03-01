function explainVar() {
  var a;
  a = 10;
  console.log(a);
  if (true) {
    var b = 20;
    console.log(b);
  }
  console.log(a);
}

explainVar();

// function explainHoisting() {
//   var a;
//   console.log(a);
//   a = 10;
//   console.log(a);
//   a = 20;
//   console.log(a);
// }

// explainHoisting();
