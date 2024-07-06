/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    const check = (d) => {
        let ball = 0
        let prev = -d
        for (let curr of position) {
            if (curr - prev >= d) {
                ball++
                if (ball == m)
                    return true
                prev = curr
            }
        }
        return false
    }

    position.sort((a,b) => a-b)
    let left = 1
    let right = position.at(-1) - position[0]
    while (left < right - 1) {
        d = Math.floor((left + right) / 2)
        if (!check(d))
            right = d - 1
        else
            left = d
    }
    return check(right)? right : left
};