function explainVar() {
  var a = 10;
  console.log(a);
  if (true) {
    var a = 20;
    console.log(a);
  }
  console.log(a);
}

explainVar();
