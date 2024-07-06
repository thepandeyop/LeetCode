/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
      let queue = [];
        let added = Array.from({ length: grid.length }, () => new Array(grid[0].length).fill(false));
        let freshOranges = 0;

        // Add rotten to queue and get count of fresh
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) {
                    freshOranges++;
                    continue;
                }
                if (grid[i][j] === 2) {
                    queue.push([i, j]);
                    added[i][j] = true;
                }
            }
        }

        // If there are no fresh oranges, return 0
        if (freshOranges === 0) {
            return 0;
        }

        let count = -1;
        let freshOrangesReached = 0;
        let coordinates = [[0, 1], [0, -1], [1, 0], [-1, 0]];

        while (queue.length > 0) {
            let size = queue.length;
            count++;

            for (let i = 0; i < size; i++) {
                let element = queue.shift();
                let v = element[0];
                let h = element[1];

                // Check every 4-directional coordinate
                for (let [dx, dy] of coordinates) {
                    let c0 = dx + v;
                    let c1 = dy + h;

                    // Add reachable fresh oranges to queue
                    if (c0 < grid.length && c1 >= 0 && c1 < grid[0].length && c0 >= 0 && !added[c0][c1] && grid[c0][c1] === 1) {
                        queue.push([c0, c1]);
                        added[c0][c1] = true;
                        freshOrangesReached++;
                    }
                }
            }
        }

        if (freshOrangesReached < freshOranges) {
            return -1;
        }
        return count;
    }
