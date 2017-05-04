var words = ["ground", "control", "to", "major", "tom"];


function mapStrLen(array, func) {
  let newArray = [];

  for (let i = 0; i< array.length; i++) {
    newArray.push(func(array[i]));
  }
  return newArray;

}

function wordLength(word) {
  return word.length;
}


console.log(mapStrLen(words, wordLength));