const reverseString = function(text) {
    let result = "";
    let counter = text.length;
    for(let i=1; i <= counter; i++) {
        result += text.substr(-i, 1);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
