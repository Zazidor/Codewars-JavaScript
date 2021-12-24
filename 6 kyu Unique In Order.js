var uniqueInOrder=function(iterable){
    if (typeof(iterable) == "string") {
        iterable = iterable.split('')
    }
    let array =[]
    for (let i = 0; i < iterable.length; i++) {
        if ((i == 0) || ( i > 0 && iterable[i] != iterable[i-1])) {
            array.push(iterable[i])
        }
    }
    return array
  }

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder([1,2,2,3,3]))
console.log(uniqueInOrder('ABBCcAD'))