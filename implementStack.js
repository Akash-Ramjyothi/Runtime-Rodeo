class Stack {
    constructor() {
        this.arr = [];
    }

    push(element) {
        this.arr.push(element);
        return this.arr.length;
    }

    pop() {
        // Remove and return top element
        const n = this.arr.length;
        const topElement = this.arr[n - 1];
        this.arr.pop();
        return topElement;
    }

    peek() {
        // Return top element without removing
        const n = this.arr.length;
        return this.arr[n - 1];
    }

    isEmpty() {
        // Check if stack is empty
        const n = this.arr.length;

        if (n == 0) {
            return true;
        } else {
            return false;
        }
    }

    size() {
        // Return number of elements
        const n = this.arr.length;
        return n;
    }

    clear() {
        // Remove all elements
        this.arr.length = 0;
    }
}

module.exports = Stack;