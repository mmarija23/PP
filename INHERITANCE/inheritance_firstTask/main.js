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



function Person(name, surname) {
    this.name = name;
    this.surname = surname;

} //inheritance
function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;

}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getData = function() {
    return this.name + " " + this.surname + " " + this.salary;
}

Employee.prototype.getSalary = function() {
    return this.salary;
}

Employee.prototype.increaseSalary = function() {
    this.salary = this.salary * 1.1;
}

var marija = new Employee('Marija', 'Nikolic', 'logoped', 1000)
marija.increaseSalary()
console.log(marija);






function Developer(name, surname, job, salary, specialization) {
    Employee.call = (this, name, surname, job, salary);
    this.specialization = specialization;
}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;


Developer.prototype.getSpecialization = function() {
    console.log(this.specialization());
}

function Menager(name, surname, job, salary, department) {
    Employee.call = (this, name, surname, job, salary);
    this.department = department;
}
Menager.prototype = Object.create(Employee.prototype);
Menager.prototype.constructor = Menager;

Menager.prototype.getDepartment = function() {
    console.log(this.department);
}
Menager.prototype.changetDepartment = function(newDepartment) {
    this.department = newDepartment;


}