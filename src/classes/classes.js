module.exports = class Hendalf {
  constructor(age, name) {
    this.name = name;
    this.age = age;
  }
  kind = "kind!";

  sayName() {
    console.log("-> Name", this.name, this);
  }

  sayAge() {
    console.log("-> Age", this.age);
  }
  sayKind = () => {
    console.log("-> Kind", this.kind, this);
  };
};
