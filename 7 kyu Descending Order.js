function descendingOrder(n){
    // n = n.toString().split('').reverse().join('')
    // n = n.reverse()
    // n = n.join('')
    return Number(n.toString().split('').sort().reverse().join(''))
  }


console.log(descendingOrder(123456789))
console.log(descendingOrder(1021))

