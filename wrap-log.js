function wrapLog(callback, name) {
   return function(a, b) {
      console.log( name, "(", a, ",", b, ") => ", callback(a, b));
    };
}

function sum(a,b) {
  return a + b;
}


var logSum = wrapLog(sum, "sum");

logSum(5,3); // sum(5,3) => 8
logSum(3,2); // sum(3,2) => 5
logSum(102,3);
logSum(10,1);
logSum(5,324);
logSum(3213,2);
