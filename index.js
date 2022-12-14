const students = ['Pavel', 'Anton', 'Viktor', 'Darya', 'Dmytro', 'Olexander', 'Anna', 'Olga', 'Dani', 'Stella'];
students.push('David');
students.push('Andriy');
console.log(students);

students.unshift('Tom');
students.unshift('Jacob');
console.log(students);

students.pop();
console.log(students);

students.shift();
console.log(students);

const CheckForStudent = prompt('Введіть ім`я студента:');
const included = students.includes(CheckForStudent);
console.log(`Is ${CheckForStudent} right here? ${included}`);

const topStudents = students.slice(3, 7);
console.log(topStudents);

const anotherStudents = ['Daniella', 'Denis', 'Anabel', 'Stanislav', 'Alex'];
console.log(anotherStudents);

const allStudents = students.concat(anotherStudents);
console.log(allStudents);

allStudents.splice(3,1);
console.log(allStudents);

allStudents.splice(5, 1, 'Ivan');
console.log(allStudents);

console.log(allStudents.join(' - '));