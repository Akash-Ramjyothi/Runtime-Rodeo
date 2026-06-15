class QueueUsingStack {
    constructor() {
        this.arr = [];
    }
    enqueue(value) {
        this.arr.push(value);
    }
    dequeue() {
        const n = this.arr.length;
        if (n == 0) return null;

        const result = this.arr[0];

        for (let i = 0; i < n + 1; i++) {
            this.arr[i] = this.arr[i + 1];
        }
        this.arr.length = n - 1;

        return result;
    }
    peek() {
        const n = this.arr.length;
        if (n == 0) return null;

        return this.arr[0];
    }
    isEmpty() {
        const n = this.arr.length;
        return n == 0 ? true : false;
    }
}

module.exports = QueueUsingStack;