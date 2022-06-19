const fs = require('fs');

const ALPHA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const nameScore = function(filename) {
  const fileData = fs.readFileSync(filename, 'utf8');
  const nameArray = fileData.replace(/"/g, '').split(',').sort();

  let ans = 0
  nameArray.forEach((firstName, i) => {
    let nameSum = 0
    const namePos = i + 1
    firstName.split('').forEach(letter => {
      const letterPosition = ALPHA.indexOf(letter) + 1
      nameSum += letterPosition
    })
    const nameVal = nameSum * namePos
    ans += nameVal
  })

  return ans
}

const score = nameScore('names.txt')

console.log("Score is", score)
