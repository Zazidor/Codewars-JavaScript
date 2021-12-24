function positiveSum(arr) {
    let sum = 0
    arr.forEach((value, index, array) => {
        if (value > 0) {
            sum += value
        }
    })
    return sum
}

console.log(positiveSum([1,2,3,4,5]))
console.log(positiveSum([1,-2,3,4,5]))
console.log(positiveSum([]))
console.log(positiveSum([-1,-2,-3,-4,-5]))
console.log(positiveSum([-1,2,3,4,-5]))