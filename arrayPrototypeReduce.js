Array.prototype.myReduce = function (callback, initialValue) {
    // Your implementation
    let acc;
    let startIndex;

    if ((this[0] == undefined && initialValue == undefined) || typeof (callback) == Function) {
        throw TypeError();
    }

    if (initialValue != undefined) {
        acc = initialValue;
        startIndex = 0;
    } else {
        acc = this[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
        if (this[i] == undefined) continue;
        acc = callback(acc, this[i], this);
    }

    return acc;
}
