/*Employees and Managers
1. Create constructor functions with properties representing the following:
○ Person: name, surname
○ Employee: inherits Person and has job and salary
○ Developer: inherits from Employee and has specialization
○ Manager: inherits from Employee and has department
2. All developers should inherit method:
○ getSpecialization which prints out the name of the specialization
3. All managers should inherit methods:
○ getDepartment which prints out the name of the department
○ changeDepartment which sets the department value on the given value
4. All employees should inherit methods:
○ getData which returns the name, surname and salary
○ getSalary which prints out the salary
○ increaseSalary which increases the salary by 10% */

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

}


class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname)
        this.job = job;
        this.salary = salary;

    }
    getData() {
        return this.name + ' ' + this.surname + ' ' + this.salary;
    }
    getSalary() {
        console.log(this.salary);
    }
    increaseSalary() {
        this.salary = this.salary * 1.1;
    }
}

class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary)
        this.specialization = specialization;
    }
    getSpecialization() {
        console.log(this.specialization);
    }
}

class Menager extends Employee {
    constructor(name, surname, job, salary, department) {
        super(name, surname, job, salary)
        this.department = department;
    }
    getDepartment() {
        console.log(this.department);
    }
    changeDepartment(newDepartment) {
        this.department = newDepartment;


    }
}
var laza = new Menager('Laza', 'Kostic', 'pesnik', 200, 'arhiva');
laza.getData();
laza.getSalary();
laza.increaseSalary();
laza.getSalary();
laza.getDepartment();
laza.changeDepartment('jezicko odeljenje');
laza.getDepartment();
console.log(laza);