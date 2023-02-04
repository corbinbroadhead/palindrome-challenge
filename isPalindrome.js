// Write your code below
const palindromeChecker = (word) => {
    let wordArr = word.split("");
    console.log(wordArr);
    for (let i = 0; i < wordArr.length; i++) {
        let first = wordArr[i];
        let last = wordArr[wordArr.length - 1 - i];
        if (first !== last) {
            console.log(`These letters do not match: '${first}' and '${last}'!`);
            return false;
        } 
    }
    console.log(`All these letters match their corresponding letter!`);
    return true;
}

console.log(palindromeChecker("rotator"));

