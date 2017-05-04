/* Old version
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i, arr[i]);
    }
  }
}
function actionWhenFound(index, value) {
  console.log("Waldo was found at index:", index, ". Proof of life value ==>", value);
}
*/


function findWaldo(arr) {
  arr.forEach( (name, index) => {
     if (name === "Waldo") {
      console.log("Waldo was found at index:", index, ". Proof of life value ==>", name)
    }
  })
}

let people = ["Alice", "Bob", "Waldo", "Winston", "sdkjfg", "Waldo"]

findWaldo(people);



