function sum(...args) {
    let result = 0;

    for (const it of args) {
        result += it;
    }

    return result;
}

//For the purpose of user debugging.
sum(100, 200, 300, 400);

module.exports = sum