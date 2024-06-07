class TrieNode {
    constructor() {
        this.children = [null, null];
    }
}

class Solution {
    constructor() {
        this.root = new TrieNode();
    }

    insert(val) {
        let curr = this.root;
        for (let bitIdx = 31; bitIdx >= 0; bitIdx--) {
            let mask = (1 << bitIdx);
            let bit = (val & mask) === 0 ? 0 : 1;
            if (!curr.children[bit]) {
                curr.children[bit] = new TrieNode();
            }
            curr = curr.children[bit];
        }
    }

    find(val) {
        if (!this.root.children) return -1;
        let curr = this.root;
        let res = 0;
        for (let bitIdx = 31; bitIdx >= 0; bitIdx--) {
            let mask = (1 << bitIdx);
            let bit = (val & mask) === 0 ? 0 : 1;
            let node = curr.children[bit];
            if (bit === 0) {
                if (!node) {
                    node = curr.children[1];
                    res |= mask;
                }
            } else {
                if (!node) {
                    node = curr.children[0];
                } else {
                    res |= mask;
                }
            }
            curr = node;
        }
        return res;
    }
}

var maximizeXor = function(nums, queries) {
    let solution = new Solution();
    nums.sort((a, b) => a - b);
    let qr = queries.map((q, index) => [q[0], q[1], index]);
    qr.sort((a, b) => a[1] - b[1]);

    let idx = 0;
    let ans = new Array(qr.length).fill(-1);
    let flag = false;

    for (let i = 0; i < qr.length; i++) {
        while (idx < nums.length && nums[idx] <= qr[i][1]) {
            solution.insert(nums[idx++]);
            flag = true;
        }
        if (!flag) {
            ans[qr[i][2]] = -1;
            continue;
        }
        let comp = ~qr[i][0];
        let res = solution.find(comp);
        ans[qr[i][2]] = res ^ qr[i][0];
    }

    return ans;
};

