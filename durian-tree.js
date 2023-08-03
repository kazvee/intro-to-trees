// Durian's Employee Org Chart: https://imgur.com/8IJzfiL

class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }

  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }

  get numberOfSubordinates() {
    return this.subordinates.length;
  }

  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;
    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }
    return numberOfPeople;
  }

  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }
}

const ada = new Employee("Ada", "CEO", 3000000.00);

const craig = new Employee("Craig", "VP Software", 1000000);
const phil = new Employee("Phil", "VP Marketing", 1000000);
const angela = new Employee("Angela", "VP Retail", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);

const simone = new Employee("Simone", "Software Developer II", 750000);
const ali = new Employee("Ali", "Software Developer", 500000);

const florida = new Employee("Florida", "Marketing Executive", 500000);
const david = new Employee("David", "SEO Specialist", 500000);
const brian = new Employee("Brian", "Spellchecker", 300000);

const karla = new Employee("Karla", "Retail Manager", 600000);

ada.addSubordinate(craig);
ada.addSubordinate(phil);
ada.addSubordinate(angela);
ada.addSubordinate(arvinder);

craig.addSubordinate(simone);
craig.addSubordinate(ali);

phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);

angela.addSubordinate(karla);


console.log(`Craig's boss is ➡️`, craig.boss);
console.log(`Craig's boss is named: ${craig.boss.name}! 👩‍💼`);
console.log(`Craig has ${craig.numberOfSubordinates} subordinates! 🫡`);
console.log(`There are ${craig.numberOfPeopleToCEO} people between Craig and the CEO! 🤔`);