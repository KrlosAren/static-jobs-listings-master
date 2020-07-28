import ViewFilter from '../pages/ViewFilter'
import FilterContent from '../pages/FilterContent'


import Categories from '../pages/Categories'


  const Filter = () => {
    const filterContent = document.getElementById('filterContent')
    const filter = Array.from(document.querySelectorAll('#filter'))
    const filterCategories = []
    filter.map(btn => {
      btn.addEventListener('click', () => {
        // const contentFilter  = new ViewFilter('filterContent')
        const filterRender = new Categories()
        filterCategories.push(btn.textContent)
        const Torender = filterRender.listCategories(filterCategories)
        filterContent.innerHTML = filterRender.template(Torender)
      })
    })
  }

  export default Filter;
