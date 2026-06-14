class PriorityQueue {
    constructor() {
        this.arr = [];
    }
    enqueue(value, priority) {
        // Add element
        this.arr.push({ value, priority });
        this.arr.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        // Remove and return element with highest priority
        if (this.arr.length == 0) {
            return null;
        }

        return this.arr.shift().value;
    }

    peek() {
        // Return highest priority element
        const n = this.arr.length;
        return n == 0 ? null : this.arr[0].value;
    }

    isEmpty() {
        // Return boolean
        return this.arr.length == 0 ? true : false;
    }

    size() {
        // Return number of items
        return this.arr.length;
    }
}


module.exports = { PriorityQueue } 