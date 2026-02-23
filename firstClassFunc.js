// Function Statement/Expression
function a() {
    console.log("a is called");
}

// Function Expression
const b = function (param1) {
    return function xyz() {

    }
}

a();

console.log(b());