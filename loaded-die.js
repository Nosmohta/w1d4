

function makeLoadedDie() {
  let list = [5, 4, 6, 6, 4, 2, 3, 3, 5, 9];
  let counter = 0;

  return function() {
    let accessIndex = (counter + list.length) % list.length;
    counter += 1;
    return list[accessIndex];
  }
}

var rollLoadedDie = makeLoadedDie();


console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
