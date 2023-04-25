
// Users initialization
const teachers = [{ id: 3, firstName: "Kimbo" }];
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

//Teacher Object Constructor
class Teacher {
    constructor(id, firstName, lastName, gender, age) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }
}

//Student Object Constructor
class Student {
    constructor(id, firstName, lastName, gender, age) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }
}
studentCounter = () => students.length + 1;

const student3 = new Student(studentCounter(), "Jacob", "Eugenio", "M", 32);
students.push(student3);


// SIR FERDIE JS CODES STARTS HERE

// SIR FERDIE JS CODES ENDS HERE




// SIR JACOB JS CODES STARTS HERE

// SIR JACOB JS CODES ENDS HERE




// SIR RICHARD JS CODES STARTS HERE

// SIR RICHARD JS CODES ENDS HERE