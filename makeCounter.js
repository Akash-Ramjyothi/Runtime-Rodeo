function makeCounter(initialValue = 0) {
    // Your implementation
    const originalValue = initialValue;

    const increment = () => {
        initialValue++;
        return initialValue;
    }

    const decrement = () => {
        initialValue--;
        return initialValue;
    }

    const reset = () => {
        initialValue = originalValue;
        return initialValue;
    }

    return {
        increment, decrement, reset
    };
}

module.exports = makeCounter;  