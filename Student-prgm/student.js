const Student = {
    rollno: 0,
    course: "",
    duration: "",
    start_date: "",
    end_date: "",
    grade: "",

    getRollNo() {
        return this.rollno;
    },
    getCourse() {
        return this.course;
    },
    getDuration() {
        return this.duration;
    },
    getStartDate() {
        return this.start_date;
    },
    getEndDate() {
        return this.end_date;
    },
    getGrade() {
        return this.grade;
    },

    setRollNo(rollno) {
        this.rollno = rollno;
    },
    setCourse(course) {
        this.course = course;
    },
    setDuration(duration) {
        this.duration = duration;
    },
    setStartDate(start_date) {
        this.start_date = start_date;
    },
    setEndDate(end_date) {
        this.end_date = end_date;
    },
    setGrade(grade) {
        this.grade = grade;
    }
};

const student = Object.create(Student);

const prompt = require('prompt-sync')();
rollno = prompt("Enter roll no: ");
course = prompt("Enter course: ");
duration = prompt("Enter duartion: ");
start_date = prompt("Enter start date: ");
end_date = prompt("Enter end date: ");
grade = prompt("Enter grade: ");

student.setRollNo(rollno);
student.setCourse(course);
student.setDuration(duration);
student.setStartDate(start_date);
student.setEndDate(end_date);
student.setGrade(grade);

console.log("Student info\n--------------------");
console.log("Roll No:", student.getRollNo());
console.log("Course:", student.getCourse());
console.log("Duration:", student.getDuration());
console.log("Start Date:", student.getStartDate());
console.log("End Date:", student.getEndDate());
console.log("Grade:", student.getGrade());


grade = prompt("Enter grade to upgrade: ");
end_date = prompt("Enter end date: ");
student.setGrade(grade);
student.setEndDate(end_date);

console.log("\nAfter modification\n------------------");
console.log("Roll No:", student.getRollNo());
console.log("Course:", student.getCourse());
console.log("Duration:", student.getDuration());
console.log("Start Date:", student.getStartDate());
console.log("End Date:", student.getEndDate());
console.log("Grade:", student.getGrade());


