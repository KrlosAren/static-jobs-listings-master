import Categories from '../pages/Categories'
import { tagsSearchBar } from '../utils/tagsSearchBar'

import { removeFilter } from '../utils/removeFilter.js'
import clear from '../utils/Clear.js'
import Job from '../pages/Job.js'

const Filter = () => {
  const app = document.getElementById('app')
  const filterContent = document.getElementById('filterContent')
  const filter = Array.from(document.querySelectorAll('#filter'))
  const filterCategories = []
  const filterJobRender = []
  filter.map(btn => {
    btn.addEventListener('click', () => {
      const filterRender = new Categories()
      filterCategories.push(btn.textContent)
      filterContent.innerHTML = filterRender.template(filterCategories)
      const listId = tagsSearchBar(filterCategories)

      listId.forEach(job => {
        const newJob = new Job(job)
        filterJobRender.push(newJob.render())
      })
      app.innerHTML = filterJobRender.join('')
      removeFilter()
    })
  })
}

export { Filter }
