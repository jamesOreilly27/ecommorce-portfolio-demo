export const shuffle = array => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    // Create copies of the objects
    const tempI = { ...newArray[i] }
    const tempJ = { ...newArray[j] }

    newArray[i] = tempJ
    newArray[j] = tempI
  }
  return newArray
}
