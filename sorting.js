
var students = [
{ id: 4, name: "alex",     age: 30 },
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 45 },
  { id: 4, name: "alex",     age: 40 }
];

function sortStudents(studentsArray){
  let results = students.sort( compNameAge);
  return results;
}

function compNameAge(stA, stB) {
  if (stA.name > stB.name) { return 1}
  else if (stA.name < stB.name) { return -1}
  else {return stB.age - stA.age };
}


console.log(sortStudents(students));
