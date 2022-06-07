// Viết function tính thứ hạng trung bình của cả lớp
let averageGrade = grades.reduce(function(a,b) {
    return a + b.grade
}, 0);
console.log(averageGrade / grades.length)
// Viết function tính thứ hạng trung bình của nam trong lớp