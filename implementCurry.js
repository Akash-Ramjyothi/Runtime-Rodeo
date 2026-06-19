function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return function (...nextArgs) {
            return curried(...args, ...nextArgs);
        }
    }
}

//For the purpose of user debugging.
//pass appropriate input in below function call
curry();
module.exports = curry