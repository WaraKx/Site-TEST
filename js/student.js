let student = {
    name : "Marie",
    age : 20,
    courses : []

}

student.age = 21;
student.grade = "A";


student.courses.push("Math", "Physics","Chemistry")

let index = student.courses.indexOf("Physics");
let slice = student.courses.slice(0, 2);

console.log(student);
console.log(index);
console.log(slice);



