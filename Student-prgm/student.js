function Student(rollno, course, duration, grade) {
    this.rollno = rollno;
    this.course = course;
    this.duration = duration;
    this.grade = grade;
}

Student.prototype.getRollNo = function () {
    return this.rollno;
};

Student.prototype.getCourse = function () {
    return this.course;
};

Student.prototype.getDuration = function () {
    return this.duration;
};

Student.prototype.getGrade = function () {
    return this.grade;
};

Student.prototype.setRollNo = function (rollno) {
    this.rollno = rollno;
};

Student.prototype.setCourse = function (course) {
    this.course = course;
};

Student.prototype.setDuration = function (duration) {
    this.duration = duration;
};

Student.prototype.setGrade = function (grade) {
    this.grade = grade;
};

const prompt = require('prompt-sync')();
rollno = prompt("Enter roll no: ");
course = prompt("Enter course: ");
duration = prompt("Enter duartion: ");
grade = prompt("Enter grade: ");
var student = new Student(rollno, course, duration, grade);

console.log("Roll No:", student.getRollNo());
console.log("Course:", student.getCourse());
console.log("Duration:", student.getDuration());
console.log("Grade:", student.getGrade());

student.setGrade('A+');
student.setDuration("5 years");

console.log("\nAfter modification:");
console.log("Grade:", student.getGrade());
console.log("Duration:", student.getDuration());

