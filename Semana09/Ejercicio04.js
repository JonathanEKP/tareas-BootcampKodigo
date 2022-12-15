var lengthOfLastWord = function(s) {
    const arrayS = s.trim().split(" ")
    let long = Number(arrayS[arrayS.length - 1].length)
    return long
};