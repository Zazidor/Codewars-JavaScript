function disemvowel(str) {
    str = str.replace(/a|e|i|o|u/gi, '')
    return str;
  }


str = 'abc'

alphabet = 'aeiou'
alphabet2 = 'AEIOU'


// "FooBar".includes("oo");
// str = str.replace(/\s/g, '');
for (let i = 0; i < str.length; i++) { 
    console.log(str[i]);
}

str = "This website is for losers LOL!"
// str = str.replace(/a|e|i|o|u/gi, '')
console.log(disemvowel(str))

str = "No offense but,\nYour writing is among the worst I've ever read"
console.log(disemvowel(str))