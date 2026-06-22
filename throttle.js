/**
 * Creates a throttled function that only invokes the provided function
 * at most once per every `delay` milliseconds
 *
 * @param {Function} func - The function to throttle
 * @param {number} delay - The number of milliseconds to throttle invocations to
 * @return {Function} Returns the new throttled function
 */
function throttle(func, delay) {
    let shouldWait = false;

    return function (...args) {
        if (shouldWait) {
            return;
        }
        func(...args);
        shouldWait = true;

        setTimeout(() => {
            shouldWait = false;
        }, delay);
    }
}
const throttledFn = throttle(() => console.log('Function called!'), 1000);
module.exports = throttle;
