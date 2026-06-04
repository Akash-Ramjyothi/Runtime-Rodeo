function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      try{
        result = fn.call(this, ...args);
      called = true;
      } catch (err) {
        throw err;
      }
    }

    return result;
  };
}

module.exports = once;