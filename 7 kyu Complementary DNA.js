function DNAStrand(dna) {
  let newdna =''
  for (let i = 0; i < dna.length; i++) {
    newdna += replace(dna[i])
  }
  return newdna
}

function replace(n) {
  if (n === 'T') { return 'A' }
  else if (n === 'A') { return 'T' }
  else if (n === 'C') { return 'G' }
  else if (n === 'G') { return 'C' }
}

console.log(DNAStrand("ATGC"))

var a = 'abc'
a[1] = 'c'
console.log(a)