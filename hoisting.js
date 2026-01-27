var x = 7;
function getName(){
    console.log("Hello Hoisting");
}

getName();
console.log(x);
console.log(getName);