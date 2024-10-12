//Get a random number between 0 and max
const getRandNum = max => {
  Math.floor(Math.random() * (max + 1) )
}

//Takes an array as an aruement. Returns shuffled array.
export const shuffle = array => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = getRandNum(i)
    // Create copies of the objects
    const tempI = { ...newArray[i] }
    const tempJ = { ...newArray[j] }

    newArray[i] = tempJ
    newArray[j] = tempI
  }
  return newArray
}

export const getRandomIndices = (array, qty) => {
  return shuffle(array).slice(0, qty)
}
