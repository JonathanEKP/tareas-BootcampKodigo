'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let positive=0, negative=0, zero=0
    for(let i = 0; i<arr.length; i++){
        if(arr[i]==0){
            zero++
        }
        else if(arr[i]>0){
            positive++
        }
        else{
            negative++
        }
    }
    let result = (positive/arr.length).toFixed(6)+'\n'+(negative/arr.length).toFixed(6)+'\n'+(zero/arr.length).toFixed(6)
    console.log(result)
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
