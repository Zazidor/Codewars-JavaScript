function findOdd(A) {
    counted = []
    for (let j=0; j < A.length; j++) {
        if (!counted.includes(A[j])) {
            count = 0
            counted.push(A[j])
            for (let i = 0; i < A.length; i++) {
                if (A[i] === A[j]) {
                    count++
                }
            }
            if (count%2 === 1) {
                return A[j]
            }
        }   
    }
  }

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]))
console.log(findOdd([10]))
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]))


console.log(3%2)