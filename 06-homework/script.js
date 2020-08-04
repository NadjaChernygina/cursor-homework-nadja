
const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];


// task #1
const getSubjects = (student) => {
    const sub = Object.keys(student.subjects);
    return sub.map(item => item[0].toUpperCase() + item.slice(1).toLowerCase().replace(/_/g, ' '));
};

console.log(getSubjects(students[0]));

// task #2
const  getAverageMark = (student) => {
    const marks = Object.values(student.subjects).join(',').split(',');
    const sum = marks.reduce((a, b) => parseInt(a) + parseInt(b), 0) / marks.length;

    return sum.toFixed(2);
};

console.log(getAverageMark(students[0]));

// task #3
const getStudentInfo = (student) => {
    const nameStudent = student.name;
    const courseStudent = student.course;
    
    return { course: courseStudent,  name: nameStudent, averageMark: getAverageMark(student) };
};


console.log(getStudentInfo(students[0]));

// task #4
const getStudentsNames = (student) => {
    const nameStudent = student.map(item => item.name).sort((a, b) => {
        if (a.toLowerCase() < b.toLowerCase()) {
            return -1;
        } else if (a.toLowerCase() > b.toLowerCase()) return 1;

        return 0;
    });

    return nameStudent;
};


console.log(getStudentsNames(students));

// task #5
const getBestStudent = (student) => {
    const nameStudent = student.map(item => item.name);
    const arrMarks = [];

    student.forEach(item => {
        arrMarks.push(parseInt(getAverageMark(item)));
    });

    const maxIndex = arrMarks.indexOf(Math.max(...arrMarks));
    const bestStudent = nameStudent[maxIndex];

    return bestStudent;
};


console.log(getBestStudent(students));

// task #6
const calculateWordLetters = (text) => {
    let object = {};
    const modifiedText = text.split( '' );

    for (let i of modifiedText) {
      
        if(object[i]) {
          object[i]++
        } else {
          object[i] = 1
        }
    }

    return object;
};

console.log(calculateWordLetters('students'));



document.writeln(`<p><b>Функція, яка повертає список предметів для конкретного студента:</b> ${getSubjects(students[0])} </p>`);
document.writeln(`<p><b>Функція, яка поверне середню оцінку по усім предметам для переданого студента:</b> ${getAverageMark(students[0])} </p>`);
document.writeln(`<p><b>Функція, яка повертає інформацію загального виду по переданому студенту:</b> ${getStudentInfo(students[0])} </p>`);
document.writeln(`<p><b>Функція, яка повертає імена студентів у алфавітному порядку:</b> ${getStudentsNames(students)} </p>`);
document.writeln(`<p><b>Функція, яка повертає кращого студента зі списку по показнику середньої оцінки:</b> ${getBestStudent(students)} </p>`);
document.writeln(`<p><b>Функція, яка повертає обє'кт, в якому ключі це букви у слові:</b> ${calculateWordLetters('students')} </p>`);


