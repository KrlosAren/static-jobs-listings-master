import ViewFilter from '../pages/ViewFilter'

const Filter = () => {
  const filterContent = document.getElementById('filterContent')
  const filter = Array.from(document.querySelectorAll('#filter'))
  filter.map(btn => {
    btn.addEventListener('click', () => {
      filterContent.innerHTML = ViewFilter()
    })
  })
}

export default Filter;
