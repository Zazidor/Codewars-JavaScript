function findUniq(arr) {
    let uniq = arr[0]
    let counted = arr.filter(x => x === arr[0]).length

    while (arr.length > 0) {
        let num = arr[0]

        if (arr.filter(k => k === num).length < counted) {
            uniq = num
        }

        arr = arr.filter(i => i !== num)

    }
    return uniq    
  }



