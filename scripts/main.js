import { buildTable, studentCounter } from './functions.js';
import { Student, Teacher } from './constructor.js';
import { students, teachers } from './user_data.js';

const student3 = new Student(studentCounter(), "Jacob", "Eugenio", "M", 32);
students.push(student3);
buildTable(students);

const getUser = teachers.map(teacher => teacher.id == 3 ? teacher.firstName : '');
console.log(getUser);

document.getElementById("user_id").textContent = getUser;

// SIR FERDIE JS CODES STARTS HERE

// SIR FERDIE JS CODES ENDS HERE




// SIR JACOB JS CODES STARTS HERE

// SIR JACOB JS CODES ENDS HERE




// SIR RICHARD JS CODES STARTS HERE

// SIR RICHARD JS CODES ENDS HERE

// Datatable loader script in dashboard - Student data
$(document).ready(function () {
    $('#usersTable').DataTable({
        pagingType: 'full_numbers',
    });
});
