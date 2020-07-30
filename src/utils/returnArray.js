
function returnArray(arraylist, value) {
  const listid = []
  for (let i in arraylist) {
    arraylist[i] === value ? listid.push(parseInt(i) + 1) : null
  }
  return listid
}


export { returnArray }
