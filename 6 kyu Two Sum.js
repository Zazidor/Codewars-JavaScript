function twoSum(numbers, target) {
    for(let i = 0; i < numbers.length; i++) {
        let num2 = target - numbers[i]
        if (numbers.includes(num2)) {
            return [i, numbers.indexOf(num2, i+1)]
        }
    }
  }

  console.log(twoSum([1,2,3], 4))
  console.log(twoSum([1234,5678,9012], 14690))
  console.log(twoSum([2,2,3], 4))
  
//   arr = [5,7,8]
//   console.log(arr.includes(15))