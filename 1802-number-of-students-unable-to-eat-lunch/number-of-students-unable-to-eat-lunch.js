/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
     while (students.length) {
        if (students[0] === sandwiches[0]) {
            students.splice(0, 1)
            sandwiches.splice(0, 1)
        }
        else students.push(students.splice(0, 1)[0])
        if(new Set(students).size===1 && [...new Set(students)][0]!==sandwiches[0])return students.length
    }
    return students.length
};