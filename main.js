

// SIR FERDIE JS CODES STARTS HERE

// SIR FERDIE JS CODES ENDS HERE

// SIR JACOB JS CODES STARTS HERE

// SIR JACOB JS CODES ENDS HERE




// SIR RICHARD JS CODES STARTS HERE

fetch('http://localhost:3000/teachers/get-teachers')
.then(res => res.json())
.then(data => {
    const teacher = data.find(teacher => teacher.id === 0)
    document.querySelector("#user_name").textContent = teacher.fname
}).catch(error => console.log(error))


// SIR RICHARD JS CODES ENDS HERE

// Datatable loader script in dashboard - Student data
// $(document).ready(function () {
//     $('#usersTable').DataTable({
//         pagingType: 'full_numbers',
//     });
// });
