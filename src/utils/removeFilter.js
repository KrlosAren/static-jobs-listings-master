
const removeFilter = () => {
  const remove = document.querySelectorAll('#removeFilter')
  console.log(remove)
  remove.forEach( btn => {
    btn.addEventListener('click', () => {
      alert('hola')
    })
  })
}

export { removeFilter }