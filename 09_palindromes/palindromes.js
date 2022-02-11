const palindromes = function (word) {
    let reversed = "";
    word = word.toLowerCase();
    word.split("");
    word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"");
    for(let i=1; i <= word.length; i++) reversed += word[word.length - i];
    if(reversed == word) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
