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

buildTable = (people) => {
    let table = document.getElementById('usersData');

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

getUser = teachers.map(teacher => teacher.id == 3 ? teacher.firstName : '');
console.log(getUser)

document.getElementById("user_id").textContent = getUser;


