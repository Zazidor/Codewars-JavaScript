function isValidWalk(walk) {
    let x = y = 0
    if (walk.length != 10) {
        return false
    }
    else {
        walk.forEach((value, index, array) => {
            if (value === 'n') { y++ }
            if (value === 's') { y-- }
            if (value === 'e') { x++ }
            if (value === 'w') { x-- }
        })
        return x == 0 && y == 0 ? true : false
    }
  }

  console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
  console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))