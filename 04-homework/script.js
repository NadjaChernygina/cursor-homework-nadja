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

    for (i = 0; i < girlsList.length; i++) {
        allStudents.push(girlsList[i]+ ', ' + boysList[i]);
    }
    return allStudents;
}

const pairs = getPairs(students);


function getSubject() {
    const studentsSubjects = [];

    for (i = 0; i < pairs.length; i++) {
        studentsSubjects.push(pairs[i]+ ': ' + themes[i]);
    }
    return studentsSubjects; 

}

const subgects = getSubject(pairs, themes);





console.log('Розділіть студентів на пари: ', pairs);
console.log('Зіставте пари з попереднього завдання та теми проєктів: ', subgects);