function differenceOf2Arrays(array1, array2) {
  const temp = [];
  array1 = array1.toString().split(',').map(String);
  array2 = array2.toString().split(',').map(String);

  for (let i in array1) {
    array2.includes(array1[i]) ? temp.push(true) : temp.push(false);
  }
  for (let i in array2) {
    array1.includes(array2[i]);
  }
  return temp;
}

export default differenceOf2Arrays