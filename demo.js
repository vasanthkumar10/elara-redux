// let person = {
//   name: "vasanth",
//   age: 20,
//   display: function () {
//     console.log(this.name, this.age);
//   },
// };

// let person1 = {
//   name: "anushka sharma",
//   age: 30,
//   display: function () {
//     console.log(this.name, this.age);
//   },
// };

// let person2 = {
//   name: "virat kohli",
//   age: 10,
//   display: function () {
//     console.log(this.name, this.age);
//   },
// };

// factory method
function createPerson(name, age) {
  return {
    name,
    age,
    display: function () {
      console.log(this.name, this.age);
    },
  };
}

let person = createPerson("vasanth", 20);
let person1 = createPerson("anushka", 30);
let person2 = createPerson("virat", 10);

person.display();
person1.display();
person2.display();
