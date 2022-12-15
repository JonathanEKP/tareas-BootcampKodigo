var plusOne = function(digits) {
    digits[digits.length-1] = digits[digits.length-1]+1
    let getNumber = ''
    for(let i = 0; i<digits.length; i++){
        getNumber += digits[i]
    }
    getNumber = getNumber.split("")
    return getNumber
};
