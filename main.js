// Datatable loader script in Inventory Management - Richard
// loader scripts starts here
$(document).ready(function () {
    $('#usersTable').DataTable({
        pagingType: 'full_numbers',
    });
});
// loader scripts ends here

// Users initialization
const teachers = [{ id:3, firstName: "Kimbo" }];
const students = [
    {
        id: 1,
        firstName: "Richard",
        lastName: "Betalmos",
        gender: "M",
        age: "30"
    },
    {

        id: 2,
        firstName: "Ferdie",
        lastName: "DelaCruz",
        gender: "M",
        age: "22"

    }
];

//Teacher Constructor
class Teacher {
    constructor(id, firstName, lastName, gender, age) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }
}

//Student Constructor
class Student {
    constructor(id, firstName, lastName, gender, age) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }
}

const student3 = new Student(3, "Jacob", "Eugenio", "M", 32);
students.push(student3);

// Table data starts here


// Users table data starts here

buildTable = (people) => {
    let table = document.getElementById('usersData');

    // people.forEach(person => {
    //     let row = `<tr>
    //                     <td>${person.id}</td>
    //                     <td>${person.access_level}</td>
    //                     <td>${person.firstName}</td>
    //                     <td>${person.lastName}</td>
    //                     <td>${person.email}</td>
    //                     <td>${person.password}</td>
    //               </tr>`;
    //     table.innerHTML += row;
    //     console.log(    table.innerHTML += row);
    // });

    for (i in people) {

        let row = `<tr>
                        <td>${people[i].id}</td>
                        <td>${people[i].firstName}</td>
                        <td>${people[i].lastName}</td>
                        <td>${people[i].gender}</td>
                        <td>${people[i].age}</td>
                    </tr>`;
        table.innerHTML += row;
    }
}



// Users table data ends here


buildTable(students);

// Table data ends here




// SIR FERDIE JS CODES STARTS HERE

// SIR FERDIE JS CODES ENDS HERE




// SIR JACOB JS CODES STARTS HERE

// SIR JACOB JS CODES ENDS HERE




// SIR RICHARD JS CODES STARTS HERE

// SIR RICHARD JS CODES ENDS HERE