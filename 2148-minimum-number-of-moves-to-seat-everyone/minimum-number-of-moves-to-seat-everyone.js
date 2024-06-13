/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    seats = seats.sort( (a,b)=>a-b);
    students = students.sort( (a,b)=>a-b);
    
    let n = seats.length;
     let minmove = 0;
    
    for(let i=0;i<n;i++){
        minmove += Math.abs(seats[i] - students[i]);
    }
    return minmove;
};