const sumAll = function(num1, num2) {
    let sum = 0;
    let numbers = 0;
    if(typeof num1 != "number" || typeof num2 != "number") return "ERROR";
    if(num1 < 0 || num2 < 0) return "ERROR";
    if(num1 < num2) {
        numbers = num2 - num1;
        for(let i=0; i<=numbers; i++) {
            sum += num1 + i;
        }
        return sum;
    } else if(num1 > num2) {
        numbers = num1 - num2;
        for(let i=0; i<=numbers; i++) {
            sum += num2 + i;
        }
        return sum;
    } else if(num1 == num2) return num1;
};

// Do not edit below this line
module.exports = sumAll;
