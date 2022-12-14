var twoSum = function (nums, target){
    for (i=0; i<nums.length; i++){
        for(j=1; j<nums.length; j++){
            if( (nums[i]+nums[j]) == target)
            {
                if(j!=i){
                    let resp = [i,j]
                    return resp
                }
            }
        }
    } 
}


let array1 = [2,5,5,11]

let target = 10

console.log(twoSum(array1,target))