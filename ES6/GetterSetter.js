class Person {
    constructor(name) {
      this._name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(name) {
      this._name = name;
    }
  
    walk() {
      console.log(`${this._name} is walking.`);
    }
  }
  
  class Programmer extends Person {
    constructor(name, programmingLanguage) {
      super(name);
      this._programmingLanguage = programmingLanguage;
    }
  
    get programmingLanguage() {
      return this._programmingLanguage;
    }
  
    set programmingLanguage(programmingLanguage) {
      this._programmingLanguage = programmingLanguage;
    }
  
    writeCode() {
      console.log(`${this._name} is writing code in ${this._programmingLanguage}.`);
    }
  }
  
  
  const programmer = new Programmer("John", "Python");
  programmer.walk(); 
  programmer.writeCode(); 
  
 
  programmer.name = "Jane";
  programmer.programmingLanguage = "Java";