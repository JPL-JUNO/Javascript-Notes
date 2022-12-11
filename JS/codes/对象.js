function people(name, sex, age) {
  this.name = name;
  this.sex = sex;
  this.age = age;
  this.sing = function (song) {
    console.log(song);
  };
}
var person = new people("Stephen", "male", 23);
console.log(person.age);
person.sing("先生你好吗？");
