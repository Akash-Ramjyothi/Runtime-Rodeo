function findMaxNumber(arr) {
    let result = arr.reduce((acc, curr) => {
        if (curr > acc) {
            return curr;
        } else {
            return acc;
        }
    }, arr[0]);

    console.log(result);
    if (result == undefined) {
        result = null;
    }
    return result;
}

//For the purpose of user debugging.
findMaxNumber([1, 2, 3, 4, 5]);

module.exports = findMaxNumber