function MinHeap() {
    this.heap = [];
}

MinHeap.prototype.push = function(val) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1);
};

MinHeap.prototype.pop = function() {
    if (this.isEmpty()) return null;

    const root = this.heap[0];
    const last = this.heap.pop();

    if (!this.isEmpty()) {
        this.heap[0] = last;
        this.heapifyDown(0);
    }

    return root;
};

MinHeap.prototype.isEmpty = function() {
    return this.heap.length === 0;
};

MinHeap.prototype.heapifyUp  = function(index) {
    while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);

        if (this.heap[index][0] < this.heap[parentIndex][0]) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        } else {
            break;
        }
    }
};

MinHeap.prototype.heapifyDown = function(index) {
    const lastIndex = this.heap.length - 1;

    while (true) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let smallestChildIndex = index;

        if (leftChildIndex <= lastIndex && this.heap[leftChildIndex][0] < this.heap[smallestChildIndex][0]) {
            smallestChildIndex = leftChildIndex;
        }

        if (rightChildIndex <= lastIndex && this.heap[rightChildIndex][0] < this.heap[smallestChildIndex][0]) {
            smallestChildIndex = rightChildIndex;
        }

        if (smallestChildIndex !== index) {
            [this.heap[index], this.heap[smallestChildIndex]] = [this.heap[smallestChildIndex], this.heap[index]];
            index = smallestChildIndex;
        } else {
            break;
        }
    }
};


var minimumEffortPath = function(heights) {
    const rows = heights.length
    const cols = heights[0].length 
    const directions = [[1,0], [-1,0], [0,1], [0 ,-1]] // down, up, right, left
    const distances = new Array(rows).fill(null).map(() => new Array(cols).fill(Infinity))
    distances[0][0] = 0

    const minHeap = new MinHeap()
    
    minHeap.push([0,0,0]) // [effort, row, col]

    while (!minHeap.isEmpty()){
        const [effort, row, col] = minHeap.pop()

        if (row === rows - 1 && col === cols - 1) return effort

        for (const [dr, dc] of directions){
            const r = row + dr
            const c = col + dc

            if (r >= 0 && r < rows && c >= 0 && c < cols){
                const difference = Math.abs(heights[r][c] - heights[row][col])
                const newEffort = Math.max(effort, difference)

                if (newEffort < distances[r][c]){
                    distances[r][c] = newEffort
                    minHeap.push([newEffort, r, c])
                }
            }
        }
    }

};