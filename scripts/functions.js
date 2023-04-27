import {students} from './user_data.js'

export let studentCounter = () => students.length + 1;

export const buildTable = (student) => {
    let table = document.getElementById('usersData');
    let i = 0;
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
};



