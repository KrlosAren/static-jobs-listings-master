import ViewFilter from '../pages/ViewFilter'
import FilterContent from '../pages/FilterContent'

const Filter = () => {
  const filterContent = document.getElementById('filterContent')
  const filter = Array.from(document.querySelectorAll('#filter'))
  filter.map(btn => {
    btn.addEventListener('click', () => {
      const filters = []
      const filteres = FilterContent(btn)
      filters.push(filteres)
      filterContent.innerHTML = ViewFilter(filters)
    })
  })
}

export default Filter;
