const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs() {
    const girlsList = [];
    const boysList = [];
    const allStudents = [];

    for(student of students){
        if (student.charAt(student.length - 1) === "а") {
            girlsList.push(student);
        } else {
            boysList.push(student);
        }
    }

    for (let i = 0; i < girlsList.length; i++) {
        allStudents.push([girlsList[i], boysList[i]]);
    }
    return allStudents; 
}

const pairs = getPairs(students);


function getSubject() {
    const studentsSubjects = [];

    for (let i = 0; i < pairs.length; i++) {
        studentsSubjects.push([pairs[i], themes[i]]); 
    }
    return studentsSubjects; 

}

const subgects = getSubject();


function getMarks() {
    const studentsMark = [];

    for (let i = 0; i < students.length; i++) {
        studentsMark.push([students[i], marks[i]]);
    }

    return studentsMark; 

}

const studentsMarks = getMarks(students, marks);


function getRandomMark() {
    const groups = [];
    for (let i = 0; i < pairs.length; i++) {
        groups.push([pairs[i], themes[i], Math.floor(Math.random(marks) * 5 + 1)]);
    }

    return groups;
}

const randomMark = getRandomMark(students, themes, marks);


console.log('Розділіть студентів на пари: ', pairs);
console.log('Зіставте пари з попереднього завдання та теми проєктів: ', subgects);
console.log('Зіставте оцінки(marks) зі студентом(students): ', studentsMarks);
console.log('Поставте кожній парі випадкову оцінку: ', randomMark);

document.writeln(`<p><b>Розділіть студентів на пари:</b> ${pairs} </p>`);
document.writeln(`<p><b>Розділіть студентів на пари:</b> ${subgects} </p>`);
document.writeln(`<p><b>Розділіть студентів на пари:</b> ${studentsMarks} </p>`);
document.writeln(`<p><b>Розділіть студентів на пари:</b> ${randomMark} </p>`);





