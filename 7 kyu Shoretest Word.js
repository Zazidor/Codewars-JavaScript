function findShort(s){
    let shortWord = s.split(' ')[0].length;
    s.split(' ').forEach((value, index, array) => {
        if (value.length < shortWord) {
            shortWord = value.length;
        }
    })
    return shortWord
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
console.log(findShort("Let's travel abroad shall we"))
// findShort("bitcoin take over the world maybe who knows perhaps")