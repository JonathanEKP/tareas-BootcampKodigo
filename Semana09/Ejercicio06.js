var singleNumber = function(nums) {
    let resultado = 0
    for(let i = 0; i<nums.length; i++){
        const numSolo = nums.filter(num => num === nums[i])
        if(numSolo.length === 1){
            resultado = numSolo[0]
            break
        }
    }
    return resultado
};