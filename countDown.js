var countdownGenerator = function (x) {
  let count = x

  return function() {
    if( count > 0) {
      count -= 1
      console.log( "T-minus ", count, "...");
    } else if ( count === 0) {
      count -= 1
      console.log( "Blast Off!!!");
    } else {
      console.log( "Rockets aleady gone, bub!");
    }
  }

};

var countdown = countdownGenerator(5);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!