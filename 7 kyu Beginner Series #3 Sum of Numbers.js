function getSum( a,b )
{
    if (a > b) {
        let temp = a
        a = b
        b = temp
    }
    sum = 0
    for (a; a<=b; a++){
        sum += a
    }
    return sum
}   

console.log(getSum(599,-22))
// console.log(getSum(360,29))
console.log(getSum(360,360))