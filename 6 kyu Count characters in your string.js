function count (string) {  
    dict = {}
    list = string.split('')
    for (let i = 0; i < list.length; i++){
        if (list[i] in dict) {
            dict[list[i]] = dict[list[i]] + 1
        } else {
            dict[list[i]] = 1
        }
    }
    return dict;
  }

  console.log(count("aba"))
  console.log(count(""))