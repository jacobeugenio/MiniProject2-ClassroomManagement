// Datatable loader script in Inventory Management - Richard
// loader scripts starts here
$(document).ready(function () {
    $('#usersTable').DataTable({
        pagingType: 'full_numbers',
    });
});
// loader scripts ends here

// Table data starts here


// Users table data starts here

buildTable = (student) => {
    let table = document.getElementById('usersData');

    for (i in student) {

        let row = `<tr>
                        <td>${student[i].id}</td>
                        <td>${student[i].firstName}</td>
                        <td>${student[i].lastName}</td>
                        <td>${student[i].gender}</td>
                        <td>${student[i].age}</td>
                    </tr>`;
        table.innerHTML += row;
    }
}

// Users table data ends here

buildTable(students);

// Table data ends here

getUser = teachers.map(teacher => teacher.id == 3 ? teacher.firstName : '');
console.log(getUser)

document.getElementById("user_id").textContent = getUser;

