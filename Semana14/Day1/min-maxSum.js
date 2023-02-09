function miniMaxSum(arr) {
    // Write your code here
    let sum1=0, sum2=0, sum3=0, sum4=0, sum5=0
    let arraySum = []
    for(let i = 0; i<arr.length; i++){
        switch (i) {
            case 0:
                sum1 = arr[i+1]+arr[i+2]+arr[i+3]+arr[i+4]
                arraySum.push(sum1)
                break;
            case 1:
                sum2 = arr[i-1]+arr[i+1]+arr[i+2]+arr[i+3]
                arraySum.push(sum2)
                break
            case 2:
                sum3 = arr[i-2]+arr[i-1]+arr[i+1]+arr[i+2]
                arraySum.push(sum3)
                break
            case 3:
                sum4 = arr[i-3]+arr[i-2]+arr[i-1]+arr[i+1]
                arraySum.push(sum4)
                break
            case 4: 
                sum5 = arr[i-4]+arr[i-3]+arr[i-2]+arr[i-1]
                arraySum.push(sum5)
                break
            default:
                break;
        }
    }
    console.log(Math.min(...arraySum)+' '+Math.max(...arraySum))
}


let arrayN = [1,2,3,4,5]

miniMaxSum(arrayN)