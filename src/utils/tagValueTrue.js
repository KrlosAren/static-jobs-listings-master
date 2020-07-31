function tagValueTrue(listOfValidation) {
  const listId = []
  for (const i of listOfValidation) {
    const id = i.reduce((acc, cu) => {
      cu === true ? acc += 1 : ''
      return acc
    }, 0)
    listId.push(id)
  }
  return listId
}

export default tagValueTrue;