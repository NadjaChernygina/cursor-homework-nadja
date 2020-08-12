class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = [5, 4, 4, 5];
    this.ourStudent = true;
  }

  getInfo() {
    return 'Студент 1го курсу' + ' ' + this.university + ' ' + this.course + ' ' + 'м.Одеса, ' + this.fullName;
  };

  get getMarks() {
    if(this.ourStudent) {
      return this.marks;
    } else {
      return null;
    }
    
  };

  set getMarks(mark) {
    if(this.ourStudent) {
      return this.marks.push(mark);
    } else {
      return null;
    }
  };

  getAverageMark() {
    return this.marks.reduce((a, b) => a + b, 0) / this.marks.length;
  };

  dismiss() {
   return this.ourStudent = false;
 }

 recover() {
   return this.ourStudent = true;
 }
};


const student1 = new Student('Hnue', 'RT', 'Rachel Green');


console.log('Student: ', student1.getInfo());

console.log('Student: ', student1.getMarks);

student1.getMarks = 5;

console.log('Student: ', student1.getMarks);

console.log('Student: ', student1.getAverageMark());

console.log(student1.dismiss());

console.log('Student: ', student1.getMarks);

console.log(student1.recover());

console.log('Student: ', student1.getMarks);



class BudgetStudent extends Student {

}