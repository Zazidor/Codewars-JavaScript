function filter_list(l) {
    l = l.filter(function(item) {
        return typeof(item) === 'number'
    })
    return l
  }


// console.log(typeof('123'))
// console.log(typeof(123))

console.log(filter_list([1,2,'a','b']))