function accum(s) {
    let result = ''
    for (let i = 0; i < s.length; i++) {
        result += s[i].toUpperCase() + s[i].toLowerCase().repeat(i)
        if (i+1 != s.length ) {
            result += '-'
        }
    }
    return result
}


console.log(accum("abcd"))
console.log(accum("RqaEzty"))
console.log(accum("cwAt"))
console.log(accum("ZpglnRxqenU"))
console.log(accum("NyffsGeyylB"))
