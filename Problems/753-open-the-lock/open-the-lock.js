/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
const INC = 1 // Value to add to increment wheel
const DEC = 9 // Value to add to decrement wheel (mod 10)

function openLock(deadends, target) {
    deadends = new Set(deadends.map(parse))
    target = parse(target)
    
    if (deadends.has(0))
        return -1

    // BFS
    let open = [0]
    let next = []
    for (let turns = 0; open.length > 0; turns++) {
        for (let node of open) {
            if (node === target)
                return turns
            for (let w = 0; w < 4; w++) { // Wheel
                for (let d = 0; d < 2; d++) { // Direction
                    const child = add(node, w, d == 0 ? INC : DEC)
                    if (deadends.has(child))
                        continue
                    deadends.add(child) // Deadends does double duty as a visited set.
                    next.push(child)
                }
            }
        }
        [open, next] = [next, open]
        next.length = 0
    }
    
    return -1
}

// Mask for single component
const M = 0b1111

function add(bits, wheel, n) {
    const shift = wheel * 4
    const value = (((bits >> shift) & M) + n) % 10
    return ( bits & ~(M << shift) ) | (value << shift)
}

function parse(s) {
    return parseInt(s[0]) | parseInt(s[1]) << 4 | parseInt(s[2]) << 8 | parseInt(s[3]) << 12
}