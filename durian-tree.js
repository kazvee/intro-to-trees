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

  employeesThatMakeOver(amount) {

    let employees = []; // 1

    if (this.salary > amount) {
      employees.push(this); // 2
    }

    for (const subordinate of this.subordinates) {
      const subordinatesThatMakeOver = subordinate.employeesThatMakeOver(amount); // 3
      employees = employees.concat(subordinatesThatMakeOver);
    }

    return employees;
  }

  get totalEmployees() {

    // Count current employee
    let totalEmployees = 1;

    // Base case: Check if the current employee has no subordinates
    if (!this.subordinates.length) {
      return totalEmployees;
    }

    // Recursive case: Loop through each subordinate and add their total employees count
    for (const subordinate of this.subordinates) {
      totalEmployees += subordinate.totalEmployees;
    }

    return totalEmployees;
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

const sarah = new Employee("Sarah", "Dev Intern", 500000);
const andrew = new Employee("Andrew", "Dev Intern", 500000);

const emma = new Employee("Emma", "Marketing Intern", 400000);
const jeremy = new Employee("Jeremy", "Marketing Intern", 400000);

const chandler = new Employee("Chandler", "Retail Intern", 400000);

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

ali.addSubordinate(sarah);
ali.addSubordinate(andrew);

david.addSubordinate(emma);
david.addSubordinate(jeremy);

karla.addSubordinate(chandler);

let wealthyEmployees = ada.employeesThatMakeOver(418401);

console.log(`Craig's boss is ➡️`, craig.boss);
console.log(`Craig's boss is named: ${craig.boss.name}! 👩‍💼`);
console.log(`Craig has ${craig.numberOfSubordinates} subordinates! 🫡`);
console.log(`There are ${craig.numberOfPeopleToCEO} people between Craig and the CEO! 🤔`);

console.log(`The wealthy employees are: 💰:`, wealthyEmployees);

console.log(`There are a total of ${ada.totalEmployees} employees! 🏢`);

console.log(`There are a total of ${craig.totalEmployees} employees working for Craig (including Craig himself)! 👨‍💼`);