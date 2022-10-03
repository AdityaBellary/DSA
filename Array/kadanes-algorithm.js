function kadane(arr) {
    let maxSum = arr[0]
    let currSum = arr[0]
    for (i = 1; i < arr.length - 1; i++) {
        currSum = Math.max(currSum + arr[i], arr[i])
        maxSum = Math.max(currSum, maxSum)
    }
    return maxSum
}


let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
let res = kadane(arr)
console.log(res);