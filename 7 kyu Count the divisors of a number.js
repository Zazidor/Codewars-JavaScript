function getDivisorsCnt(n){
    cnt = 1
    n_sqrted = Math.floor(Math.sqrt(n))
    for (let i = 1; i <= n/2; i++) {
        if (n % i === 0) {
            // console.log(i)
            cnt++
        }
    }
    return cnt
}

// console.log(getDivisorsCnt(1))
// console.log(getDivisorsCnt(10))
// console.log(getDivisorsCnt(11))
// console.log(getDivisorsCnt(54))
console.log(getDivisorsCnt(500000))
