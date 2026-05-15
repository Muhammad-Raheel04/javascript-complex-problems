const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 92 },
    { name: 'Charlie', grade: 78 },
    { name: 'David', grade: 88 }
];

// Use array methods to:
// 1. Check if every student passed (grade >= 60)
// 2. Check if any student got an A (grade >= 90)
// 3. Get average grade (reduce)
// 4. Get names of students with grades above 85

const isEveryonePassed = students.every((item) => item.grade >= 60);
console.log(isEveryonePassed);

const hasAnyStudentGradeA = students.some((item) => item.grade >= 90);
console.log(hasAnyStudentGradeA);

const averageGrade = students.reduce((sum, item) => sum + item.grade, 0) / students.length;
console.log(averageGrade);

const nameOfStudentWithGradeAbove85 = students.filter((item) => item.grade > 85).map((s) => s.name).join(" ");
console.log(nameOfStudentWithGradeAbove85);
