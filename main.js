// const person = {
//   gender: "man",
//   name: "dana",
//   lastName: "or",
//   colorEyes: "black",
//   hairColor: "blond",
//   live: true,
//   Weight: 10,
//   WeightGoal: function () {
//     return this.Weight + 10;
//   },

//   AfterWadding: function () {
//     return this.lastName + " bla";
//   },
// };
// console.log(person);
// console.log(person.WeightGoal());
// console.log(person.AfterWadding(), person.lastName);

// console.log(person.WeightGoal());
// person.Weight = 5;
// console.log(person.WeightGoal());

const student = {
  fName: "liel",
  lName: "itzchak",
  phone: 972547080093,
  eMaile: "liel.izcha321@gmail.com",
  scores: [1,10],
  nameAmeLastName: function () {
    return this.fName + " " + this.lName;
  },
  gpa: function () {
    let sum = 1;
    for (let i = 0; i < student.scores.length; i++) {
      sum = i * student.scores.length;
    }
    return sum;
  },
  LowScore: function () {
    let min = student.scores[i];
    for (let i = 0; i < student.scores.length; i++) {
      for (let j = i + 1; j < student.scores.length; j++) {
        if (student.scores[i] < student.scores[j]) {
          min = student.scores[i];
        }
      }
    }
    return min;
  },
};
// console.log(LowScore());
// console.log(student.fName);
// console.log(student.lName);
// console.log(student.phone);
// console.log(student.eMaile);
// console.log(student.scores);
console.log(student.gpa());

// console.log(student.nameAmeLastName());
