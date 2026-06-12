function countVowels(str) {
    str = str.toLowerCase();
    let result = 0;

    for (const it of str) {
        if (it == "a" || it == "e" || it == "i" || it == "o" || it == "u") {
            result++;
        }
    }

    console.log(result);
    return result;
}

//For the purpose of user debugging.
countVowels("JavaScript");

module.exports = countVowels