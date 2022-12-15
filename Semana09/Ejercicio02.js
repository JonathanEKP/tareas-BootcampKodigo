var isPalindrome = function(x) {
    let arrayX = x.toString().split("")
    let reverse = x.toString().split("").reverse()
    let no = 0, yes=0 

    for(let i=0; i<arrayX.length; i++){
        if(arrayX[i] !== reverse[i]){
            no++
        }else{
            yes++
        }
    }
    return no>0? false : true
};