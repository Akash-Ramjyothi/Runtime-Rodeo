function validatePalindrome(str) {
    // Your implementation\
    let formatedStr = "";
    let reversedStr = "";
    let n = str.length;

    formatedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");;

    //     for (let i = 0; i < n; i++){
    //         if (str[i] != " ") {
    //             formatedStr += str[i];
    //         }
    // }

    for (let i = formatedStr.length - 1; i >= 0; i--) {
        reversedStr += formatedStr[i];
    }

    console.log(formatedStr);
    console.log(reversedStr);


    if (reversedStr === formatedStr) {
        return true;
    }


    return false;
}

//For the purpose of user debugging.
validatePalindrome("race a car");

module.exports = validatePalindrome