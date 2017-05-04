var words = ["ground", "control", "to", "major", "tom"];


function mapStrLen(array, func) {
  let newArray = [];

  for (let i = 0; i< array.length; i++) {
    let length = func(array[i]);
    newArray.push(length);
  }
  return newArray;
}


function wordLength(word) {
  return word.length;
}


console.log(mapStrLen(words, wordLength));