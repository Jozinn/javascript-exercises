const fibonacci = function(n) {
    let number;
    let sequence = [];
    if(n < 0) return "OOPS"
    for(let i=0; i<n; i++) {
        if(i == 0 || i == 1) sequence[i] = 1;
        else sequence[i] = sequence[i-2] + sequence[i-1];
    }
    number = sequence[sequence.length-1];
    return number;
};

// Do not edit below this line
module.exports = fibonacci;
